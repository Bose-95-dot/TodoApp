import React from "react";
import { Checkbox } from "antd";
export default function TodoCheckbox(props) {
  const { state, checkFunc, inputOnChange, inputStyle, keydown } = props;
  console.log(state, "state");
  return (
    <>
      {state?.todoIndex && (
        <Checkbox
          key={state?.todoIndex}
          onChange={() => {
            checkFunc(!state?.isPending, state?.todoIndex);
          }}
          checked={state?.isPending}
        />
      )}

      <input
        type="text"
        className={inputStyle}
        placeholder="Enter a task"
        value={state?.title || ""}
        onKeyDown={keydown}
        onChange={inputOnChange}
      />
    </>
  );
}
