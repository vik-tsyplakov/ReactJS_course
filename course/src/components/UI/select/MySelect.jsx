import React from "react";
import cl from "./MySelect.module.css";

export default function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <div>
      <select
        className={cl.mySelect__body}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option disabled value={""}>
          {defaultValue}
        </option>
        {options.map((option) => (
          <option
            className={cl.mySelect__item}
            key={option.value}
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
