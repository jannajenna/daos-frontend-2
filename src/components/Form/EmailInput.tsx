import React from "react";
import "./Form.modules.css";

interface EmailInputProps {
  placeholder: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ placeholder }) => {
  return <input type="email" className="input emailInput" placeholder={placeholder} />;
};

export default EmailInput;
