import React from "react";
interface InputProps {
  type?: string;
  id: string;
  label: string;
  onChange: any;
  value: string;
}

const Input: React.FC<InputProps> = ({ id, label, onChange, type, value }) => {
  return (
    <div className="w-full relative">
      <input
        value={value}
        type={type || "text"}
        onChange={onChange}
        id={id}
        className="w-full p-6 pt-6 pb-2 focus:outline-none rounded-md text-md text-white bg-neutral-700 appearance-none peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute text-md top-4 left-6 text-zinc-400 z-10 transform duration-150 peer-focus:scale-75 peer-focus:-translate-x-3 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
