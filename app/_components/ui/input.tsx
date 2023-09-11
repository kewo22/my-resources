import { Inputs } from "@/app/test/page";
import React, { useMemo, useState } from "react";
import {
  UseControllerProps,
  useController,
  FieldValues,
} from "react-hook-form";

interface TextInputProps<T extends FieldValues> {
  type?: "text" | "num" | "date" | "time";
  placeHolder?: string;
  label?: string;
  useControllerProps: UseControllerProps<T>;
  isDisabled?: boolean;
}

export default function Input(props: TextInputProps<Inputs>) {
  const {
    useControllerProps,
    placeHolder = "",
    type = "text",
    label = "",
    isDisabled = false,
  } = props;
  const { field, fieldState } = useController(useControllerProps);

  const className = useMemo(() => {
    let className = {
      wrapper: {
        default:
          "w-full border-b border-b-stone-600 flex flex-row items-center focus-within:border-blue-600 transition-all py-1 px-3",
        error: "",
        disabled: "",
      },
      label: {
        default: "mr-1 font-semibold ",
        error: "",
      },
      input: "outline-none bg-transparent flex-grow",
      errorText: "text-red-600 text-xs font-semibold",
    };

    const classNameCopy = JSON.parse(JSON.stringify(className));
    if (isDisabled) {
      classNameCopy.wrapper.disabled = "!bg-gray-100";
      className = { ...classNameCopy };
    }

    if (!isDisabled) {
      if (fieldState && fieldState.error && fieldState.error.message) {
        classNameCopy.wrapper.error = "!border-b-red-600";
        classNameCopy.label.error = "text-red-600";
        className = { ...classNameCopy };
      } else {
        classNameCopy.wrapper.error = "";
        classNameCopy.label.error = "";
        className = { ...classNameCopy };
      }
    }

    return className;
  }, [isDisabled, fieldState]);

  let inputMode: any =
    "none" ||
    "text" ||
    "tel" ||
    "url" ||
    "email" ||
    "numeric" ||
    "decimal" ||
    "search" ||
    undefined;

  if (type === "num") {
    inputMode = "numeric";
  } else {
    inputMode = "text";
  }

  return (
    <div
      className={`${className.wrapper.default} ${className.wrapper.error} ${className.wrapper.disabled}`}
    >
      {label && (
        <label
          htmlFor={field.name}
          className={`${className.label.default} ${className.label.error}`}
        >
          {label}
        </label>
      )}
      <input
        {...field}
        id={field.name}
        value={field.value ? field.value : ""}
        className={className.input}
        type={type}
        inputMode={inputMode || "text"}
        placeholder={placeHolder}
        disabled={isDisabled}
      />
      {!isDisabled && (
        <p className={className.errorText}>{fieldState.error?.message}</p>
      )}
      {/* <button className={`${className.btn.btn} ${className.btn.save}`}>
            Save
          </button>
          <button className={`${className.btn.btn} ${className.btn.cancel}`}>
            Cancel
          </button> */}
      {/* <p>{fieldState.isTouched && "Touched"}</p>
          <p>{fieldState.isDirty && "Dirty"}</p>
          <p>{fieldState.invalid ? "invalid" : "valid"}</p>
          <p>{fieldState.error ? "error" : fieldState.error}</p> */}
    </div>
  );
}
