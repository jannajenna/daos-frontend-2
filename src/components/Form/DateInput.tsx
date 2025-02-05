import React from "react";
import "./Form.modules.css";

interface DateInputProps {
  placeholder: string;
}

const DateInput: React.FC<DateInputProps> = ({ placeholder }) => {
  return <input type="date" className="input dateInput" placeholder={placeholder} />;
};

export default DateInput;
