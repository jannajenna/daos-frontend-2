import React from "react";
import "./Form.modules.css";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, value, onChange, placeholder }) => (
  <div className="formContainer">
    <label className="label">{label}</label>
    <textarea value={value} onChange={onChange} placeholder={placeholder} className="input textArea" />
  </div>
);

export default TextArea;
