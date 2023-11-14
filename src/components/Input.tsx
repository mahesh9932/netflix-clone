import React from "react";
interface InputProps {
  type?: string;
  id: string;
  label: string;
  onChange: any;
  value: string;
}

const Input = ({ id, label, onChange, type, value }: InputProps) => {
  return (
    <div className="w-full relative">
      <input
        value={value}
        type={type || "text"}
        onChange={onChange}
        id={id}
        className="w-full p-6 pt-6 pb-2 focus:outline-none focus:ring-0 rounded-md text-md text-white bg-neutral-700 appearance-none peer"
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="absolute origin-[0] text-md z-10 top-1 left-2 scale-75 transform translate-x-2 duration-150 peer-focus:scale-75 peer-focus:translate-x-2 peer-focus:translate-y-0 text-zinc-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-x-2 peer-placeholder-shown:translate-y-5 "
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
