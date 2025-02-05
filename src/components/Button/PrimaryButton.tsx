import React from "react";
import "./Button.modules.css";
//import { useNavigate } from "@tanstack/react-router";

interface PrimaryButtonProps {
  label: string; // Text that will appear on the button
  onClick?: () => void; // Function to call when the button is clicked
  type?: "button" | "submit" | "reset"; // Button type
  //isDisabled?: boolean; // If the button is disabled
  // isFullWidth?: boolean; // If the button should take full width
  to?: string; // Added for routing
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label, type = "button" }) => {
  // Determine button classes dynamically
  //const buttonClass = `primaryButton ${isDisabled ? "disabledButton" : ""} ${isFullWidth ? "fullWidthButton" : ""}`.trim();

  return (
    <button className="primaryButton" type={type}>
      {label}
    </button>
  );
};

export default PrimaryButton;
