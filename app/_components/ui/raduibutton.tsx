import { Inputs } from "@/app/test/page";
import React, { useMemo, useState } from "react";
import {
  UseControllerProps,
  useController,
  FieldValues,
} from "react-hook-form";

interface RadioButtonInputs<T extends FieldValues> {
  label?: string;
  value: string;
  useControllerProps: UseControllerProps<T>;
  isDisabled?: boolean;
}

export default function RadioButton(props: RadioButtonInputs<Inputs>) {
  const { useControllerProps, label = "", isDisabled = false, value } = props;
  const { field, fieldState } = useController(useControllerProps);

  const className = useMemo(() => {
    let className = {
      wrapper: {
        default: "w-full flex flex-row items-center",
      },
      label: {
        default: "mr-1 font-semibold",
      },
      input: {
        disabled: "",
        error: "",
      },
    };

    const classNameCopy = JSON.parse(JSON.stringify(className));
    if (isDisabled) {
      classNameCopy.input.disabled = "!bg-gray-100";
      className = { ...classNameCopy };
    }

    if (!isDisabled) {
      if (fieldState && fieldState.error && fieldState.error.message) {
        classNameCopy.input.error = "!border-red-600";
        className = { ...classNameCopy };
      } else {
        classNameCopy.input.error = "";
        className = { ...classNameCopy };
      }
    }

    return className;
  }, [isDisabled, fieldState]);

  return (
    <div className={`${className.wrapper.default}`}>
      <label htmlFor={field.name} className={`${className.label.default}`}>
        {label}
      </label>
      <input
        {...field}
        value={value}
        className={`${className.input.disabled} ${className.input.error}`}
        type="radio"
        disabled={isDisabled}
      />
      {/* <p className={className.errorText}>{fieldState.error?.message}</p> */}
    </div>
  );
}
