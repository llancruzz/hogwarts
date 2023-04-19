import { useEffect, useRef, useState } from "react";

const useClickOutsideToggle = () => {
  // Toggle burger navbar expanded.
  const [expanded, setExpanded] = useState(false);

  // Create variable ref to instantiate a useRef() that holds a reference to the burger icon.
  const ref = useRef(null);

  // Handle function to allow users to close the burger navbar when it is clicked outside.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);
  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
