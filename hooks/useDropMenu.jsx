import { useState, useEffect, useRef } from "react";

export function useDropMenu(initialOpen = false) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown(); // Close dropdown if clicking outside
      }
    };

    document.addEventListener("mousedown", handleBodyClick);

    return () => {
      document.removeEventListener("mousedown", handleBodyClick);
    };
  }, []);

  return [toggleDropdown, closeDropdown, isOpen, dropdownRef];
}
