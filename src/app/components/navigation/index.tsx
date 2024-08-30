"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

type ToggleFunction = () => void;
export interface NavProps {
  isOpen?: boolean;
  toggle: ToggleFunction;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle: ToggleFunction = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Navigation;
