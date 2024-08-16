"use client";

import { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { getTeachers } from "./FetchTeachersData";

import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import DeleteTeacherBlock from "@/components/admin/teachers/DeleteBlock";
import EditBlock from "@/components/admin/teachers/EditeBlock";
import { ubuntu } from "@/libs/font";
import { cn } from "@/libs/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ArrowRight } from "lucide-react";

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
  // background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: "100%", // Full width to adapt to the container
});

export function CardBtnOurTeachers({ children, className }) {
  return (
    <div
      className={cn(
        "flex justify-center gap-2 items-center max-w-xs bg-destructive border-4 text-primary font-semibold text-lg py-3 px-8 rounded-2xl hover:opacity-90 transition duration-300",
        className
      )}
    >
      {children} <ArrowRight />
    </div>
  );
}

const TeacherDialogContent = ({ name, experience, image, bio }) => (
  <DialogContent className="max-w-4xl bg-accent-Hover rounded-xl max-h-[90vh] overflow-y-auto">
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 p-6 md:p-10">
      {/* Image Section */}
      <div className="relative w-52 h-72 md:w-72 md:h-96 overflow-hidden rounded-[40px] border border-accent">
        <Image
          src={image}
          alt={`${name}'s profile`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-[40px]"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-accent text-center md:text-left">
            {name}
          </DialogTitle>
          <DialogDescription className="text-lg text-accent-TextHover font-medium mt-2 text-center md:text-left">
            {experience}
          </DialogDescription>
        </DialogHeader>
        <p className="text-lg text-accent font-semibold mt-4">{bio}</p>
      </div>
    </div>
  </DialogContent>
);

export default function OurTeachersCards() {
  const [teachers, setTeachers] = useState([]);
  const containerRef = useRef(null);
  const [openDialog, setOpenDialog] = useState(null); // Moved to the top level

  // Fetch teachers data
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const data = await getTeachers();
        if (data?.teachers) {
          // Sort teachers by their order before setting the state
          const sortedTeachers = data.teachers.sort(
            (a, b) => a.order - b.order
          );
          setTeachers(sortedTeachers);
        }
      } catch (error) {
        console.error("Failed to fetch teachers:", error);
      }
    };

    fetchTeachers();
  }, []);

  // Drag and drop handlers
  const onDragEnd = async (result) => {
    const { source, destination } = result;
    if (!destination || source.index === destination.index) return;

    const reorderedTeachers = reorder(
      teachers,
      source.index,
      destination.index
    );
    setTeachers(reorderedTeachers);

    try {
      const response = await fetch("/api/our-teachers/reorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reorderedTeachers }),
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

  if (teachers.length === 0) {
    return <p className="text-center font-bold py-4">No teachers...</p>;
  }

  const { user } = useUser();
  const admin = user?.publicMetadata.role === "admin";

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
              {teachers.map((teacher, index) => (
                <Draggable
                  key={teacher.id}
                  draggableId={teacher.id}
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
                      <div className="flex justify-center pb-2">
                        {admin && (
                          <>
                            <div className="flex justify-end m-2">
                              <EditBlock id={teacher.id} />
                            </div>
                            <div className="flex justify-end m-2">
                              <DeleteTeacherBlock id={teacher.id} />
                            </div>
                          </>
                        )}
                      </div>
                      <div className="relative w-full h-[28rem] overflow-hidden rounded-[40px] border border-accent">
                        <Image
                          src={teacher.image}
                          alt={`Our Teacher ${teacher.fullName} (Profile Image)`}
                          layout="fill"
                          style={{ objectFit: "cover" }}
                          className="rounded-[40px]"
                          priority
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center pt-6">
                        <h3
                          className={`${ubuntu.className} text-primary text-3xl font-semibold uppercase`}
                        >
                          {teacher.fullName}
                        </h3>
                        <p className="text-accent-TextHoverDark text-2xl py-4">
                          {teacher.subTitle}
                        </p>
                        <Dialog
                          open={openDialog === teacher.id}
                          onOpenChange={() =>
                            setOpenDialog(
                              openDialog === teacher.id ? null : teacher.id
                            )
                          }
                        >
                          <DialogTrigger className="pb-5">
                            <CardBtnOurTeachers>See More</CardBtnOurTeachers>
                          </DialogTrigger>
                          <TeacherDialogContent
                            name={teacher.fullName}
                            experience={teacher.subTitle}
                            image={teacher.image}
                            bio={teacher.description}
                          />
                        </Dialog>
                      </div>
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
