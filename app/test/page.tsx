"use client";

import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  useForm,
  SubmitHandler,
  UseControllerProps,
  useController,
  FieldValues,
} from "react-hook-form";
import { number, object, string } from "yup";

interface Inputs {
  firstName: string;
  age?: number | null;
}

interface TextInputProps<T extends FieldValues> {
  type?: "text" | "num";
  placeHolder?: string;
  useControllerProps: UseControllerProps<T>;
}

const schema = object().shape({
  firstName: string().required("First Name is required"),
  age: number()
    .integer("Must be a valid number.")
    .typeError("Must be a valid number.")
    .min(1, "Min value is 1.")
    .nullable()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? null : value
    ),
});

// const schema = object({
//   firstName: string().required(),
//   age: number().positive().integer(),
//   // email: string().email(),
//   // website: string().url().nullable(),
//   // createdOn: date().default(() => new Date()),
// });

function TextInput(props: TextInputProps<Inputs>) {
  const { useControllerProps, placeHolder = "", type = "text" } = props;
  const { field, fieldState } = useController(useControllerProps);

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

  let className = {
    wrapper: {
      default:
        "border-b border-b-slate-950 flex flex-row gap-1 pb-1 items-center",
      error: "",
    },
    input: "outline-none bg-transparent flex-grow",
    errorText: "text-red-600 text-xs font-semibold",
  };

  if (fieldState && fieldState.error && fieldState.error.message) {
    const classNameCopy = JSON.parse(JSON.stringify(className));
    classNameCopy.wrapper.error = "border-b-red-600";
    className = { ...classNameCopy };
  } else {
    const classNameCopy = JSON.parse(JSON.stringify(className));
    classNameCopy.wrapper.error = "";
    className = { ...classNameCopy };
  }

  if (type === "num") {
    inputMode = "numeric";
  }

  return (
    <div className={`${className.wrapper.default} ${className.wrapper.error}`}>
      <input
        {...field}
        value={field.value ? field.value : ""}
        className={className.input}
        type={type}
        inputMode={inputMode}
        placeholder={placeHolder}
      />
      <p className={className.errorText}>{fieldState.error?.message}</p>
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

export default function Page() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({
    defaultValues: {
      firstName: "",
      age: null,
    },
    mode: "all",
    resolver: yupResolver<Inputs>(schema),
    reValidateMode: "onBlur",
  });

  const onSubmit = (data: Inputs) => console.log(data);
  console.log("🚀 ~ file: page.tsx:74 ~ Page ~ errors:", errors);

  //   console.log(watch("firstName"));
  //   const watchAllFields = watch();
  //   console.log(watchAllFields);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          type="text"
          placeHolder="Item"
          useControllerProps={{ control, name: "firstName" }}
        />
        <TextInput
          type="num"
          placeHolder="Item"
          useControllerProps={{ control, name: "age" }}
        />
        {/* <NumberInput control={control} name="age" /> */}
        <input type="submit" />
      </form>
    </>
  );
}
