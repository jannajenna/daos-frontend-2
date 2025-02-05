import React from "react";
import "./Form.modules.css";

interface TextInputProps {
  placeholder: string;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  return <input type="text" className="input textInput" placeholder={placeholder} />;
};

export default TextInput;
