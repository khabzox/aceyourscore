"use client"
import DragAndDropList from "./DraggableCards";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Draggable Cards</h1>
      <DragAndDropList />
    </div>
  );
}
