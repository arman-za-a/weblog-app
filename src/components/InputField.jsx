import React, { memo } from "react";
const InputField = ({ name, lable, value, onChange }) => (
    <div className="relative mb-7">
        {
            name === "comment" 
                ? <textarea 
                    className="peer input h-28 resize-none" 
                    value={value} 
                    onChange={({ target }) => onChange(name, target.value)}>
                </textarea>
                : <input 
                    className="peer input" 
                    value={value} 
                    onChange={({ target }) => onChange(name, target.value)} 
                /> 
        }
        <label 
            className="peer-focus:left-2 peer-focus:-top-2 peer-focus:z-10 peer-focus:text-primary peer-focus:text-xs absolute left-4 top-4 px-2 bg-white text-[#beb9b9] transit"
        >
            {lable}
        </label>
    </div>
);
export default memo(InputField);