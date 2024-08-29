"use client";

import { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { getTestimonials } from "./FetchTestimonialsData";
import { useUser } from "@clerk/nextjs";
import { cn } from "@/libs/utils";
import DeleteTeacherBlock from "@/components/admin/testimonials/DeleteBlock";
import EditBlock from "@/components/admin/testimonials/EditeBlock";


export function TestimonialCard({ title, desc, id }) {
  return (
    <div className="text-start flex justify-between w-full p-6 rounded-3xl bg-accent">
      <div>
        <h3 className="text-primary text-xl font-semibold uppercase">{title}</h3>
        <p className="text-accent-TextHoverDark pt-2">{desc}</p>
      </div>
      <div className="flex flex-col space-y-2">
        <DeleteTeacherBlock id={id}/>
        <EditBlock id={id} />
      </div>
    </div>
  );
}


// A function to reorder the list
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// Define grid size
const grid = 8;

// Get item style function
const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,
  background: isDragging ? "#ea5455" : "#002b5b",
  ...draggableStyle,
});

// Get list style function
const getListStyle = (isDraggingOver) => ({
  padding: grid,
  width: "100%", // Full width to adapt to the container
});

export default function OurTestimonialsCards() {
  const [testimonials, setTestimonials] = useState([]);
  const containerRef = useRef(null);
  const { user } = useUser();
  const admin = user?.publicMetadata.role === "admin";

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        if (data?.testimonials) {
          const sortedTestimonials = data.testimonials.sort(
            (a, b) => a.order - b.order
          );
          setTestimonials(sortedTestimonials);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // Drag and drop handlers
  const onDragEnd = async (result) => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) return;

    const reorderedTestimonials = reorder(
      testimonials,
      source.index,
      destination.index
    );
    setTestimonials(reorderedTestimonials);

    try {
      const response = await fetch("/api/our-testimonials/reorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reorderedTestimonials }),
      });

      if (!response.ok) {
        throw new Error("Failed to save the order");
      }
    } catch (error) {
      console.error("Failed to save the order:", error);
    }
  };

  // Set drag constraints
  const dragConstraints = containerRef.current
    ? {
      top: 0,
      left: 0,
      right: containerRef.current.clientWidth - 250, // Adjust width
      bottom: containerRef.current.clientHeight,
    }
    : {};

  if (testimonials.length === 0) {
    return <p className="text-center font-bold py-4">No Testimonials Found...</p>;
  }

  return (
    <section className="w-full mx-auto text-center pb-14">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={(ref) => {
                provided.innerRef(ref);
                containerRef.current = ref; // Set ref to container
              }}
              className="flex flex-col lg:flex-row flex-wrap gap-6 justify-center"
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {testimonials.map((testimonial, index) => (
                <Draggable
                  key={testimonial.id}
                  draggableId={testimonial.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="max-w-md lg:w-1/3 p-2 rounded-3xl"
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <TestimonialCard
                        title={testimonial.fullName}
                        desc={testimonial.description}
                        id={testimonial.id}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}
