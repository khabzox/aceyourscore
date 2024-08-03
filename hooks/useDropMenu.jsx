import { useState, useEffect } from "react";

export function useDropMenu(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleBodyClick = (event) => {
      // Check if the click is outside the dropdown
      if (!event.target.closest(".dropdown-container")) {
        setIsOpen(false);
      }
    };

    // Attach event listener to the body
    document.body.addEventListener("mousedown", handleBodyClick);

    // Clean up event listener on unmount
    return () => {
      document.body.removeEventListener("mousedown", handleBodyClick);
    };
  }, []);

  return [toggleDropdown, closeDropdown, isOpen];
}
