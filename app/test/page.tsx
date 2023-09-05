"use client";

import React, { useEffect, useMemo, useRef } from "react";
import {
  useForm,
  UseControllerProps,
  useController,
  FieldValues,
  SubmitHandler,
} from "react-hook-form";
import { boolean, number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Inputs {
  firstName: string;
  age?: number | null;
  gender: string;
  isActive?: number;
}

interface TextInputProps<T extends FieldValues> {
  type?: "text" | "num";
  placeHolder?: string;
  label?: string;
  useControllerProps: UseControllerProps<T>;
  isDisabled?: boolean;
}

interface SelectInputs<T extends FieldValues> {
  placeHolder?: string;
  label?: string;
  useControllerProps: UseControllerProps<T>;
  selectionItems: Record<string, any>[];
}

interface CheckBoxInputs<T extends FieldValues> {
  label?: string;
  useControllerProps: UseControllerProps<T>;
}

interface TextInputProps<T extends FieldValues> {
  type?: "text" | "num";
  placeHolder?: string;
  label?: string;
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
  gender: string()
    .required("Required")
    .oneOf(["", "volvo", "saab", "mercedes", "audi"], "Invalid Selection")
    .label("Selected Country"),
  isActive: number()
    .oneOf([0, 1])
    .transform((value, originalValue) => {
      return Boolean(originalValue) ? 1 : 0;
    }),
});

function TextInput(props: TextInputProps<Inputs>) {
  const {
    useControllerProps,
    placeHolder = "",
    type = "text",
    label = "",
    isDisabled = false,
  } = props;
  const { field, fieldState } = useController(useControllerProps);

  const className = useMemo(() => {
    return {
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
  }, []);

  const ref = useRef(className);

  useEffect(() => {
    if (isDisabled) {
      const classNameCopy = JSON.parse(JSON.stringify(ref.current));
      classNameCopy.wrapper.disabled = "!bg-gray-100";
      ref.current = { ...classNameCopy };
    }
  }, [isDisabled]);

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

  if (fieldState && fieldState.error && fieldState.error.message) {
    ref.current.wrapper.error = "!border-b-red-600";
    ref.current.label.error = "text-red-600";
  } else {
    ref.current.wrapper.error = "";
    ref.current.label.error = "";
  }

  if (type === "num") {
    inputMode = "numeric";
  } else {
    inputMode = "text";
  }

  return (
    <div
      className={`${ref.current.wrapper.default} ${ref.current.wrapper.error} ${ref.current.wrapper.disabled}`}
    >
      {label && (
        <label
          htmlFor={field.name}
          className={`${ref.current.label.default} ${ref.current.label.error}`}
        >
          {label}
        </label>
      )}
      <input
        {...field}
        id={field.name}
        value={field.value ? field.value : ""}
        className={ref.current.input}
        type={type}
        inputMode={inputMode || "text"}
        placeholder={placeHolder}
        disabled={isDisabled}
      />
      <p className={ref.current.errorText}>{fieldState.error?.message}</p>
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

function SelectInput(props: SelectInputs<Inputs>) {
  const {
    useControllerProps,
    placeHolder = "",
    label = "",
    selectionItems,
  } = props;
  const { field, fieldState } = useController(useControllerProps);

  let className = {
    wrapper: {
      default:
        "w-full border-b border-b-stone-600 flex flex-row items-center focus-within:border-blue-600 transition-all",
      error: "",
    },
    label: {
      default: "mr-1 font-semibold",
      error: "",
    },
    input: "outline-none bg-transparent flex-grow appearance-none select-input",
    errorText: "text-red-600 text-xs font-semibold",
  };

  if (fieldState && fieldState.error && fieldState.error.message) {
    const classNameCopy = JSON.parse(JSON.stringify(className));
    classNameCopy.wrapper.error = "!border-b-red-600";
    classNameCopy.label.error = "text-red-600";
    className = { ...classNameCopy };
  } else {
    const classNameCopy = JSON.parse(JSON.stringify(className));
    classNameCopy.wrapper.error = "";
    classNameCopy.label.error = "";
    className = { ...classNameCopy };
  }

  return (
    <div className={`${className.wrapper.default} ${className.wrapper.error}`}>
      <label
        htmlFor={field.name}
        className={`${className.label.default} ${className.label.error}`}
      >
        {label}
      </label>
      <select
        {...field}
        name="cars"
        id="cars"
        value={field.value ? field.value : ""}
        className={className.input}
      >
        <option value="">{placeHolder}</option>
        {selectionItems.map((item, i) => {
          return (
            <option key={i} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
      <p className={className.errorText}>{fieldState.error?.message}</p>
    </div>
  );
}

function CheckBox(props: CheckBoxInputs<Inputs>) {
  const { useControllerProps, label = "" } = props;
  const { field, fieldState } = useController(useControllerProps);

  let className = {
    wrapper: {
      default: "w-full flex flex-row items-center",
      error: "",
    },
    label: {
      default: "mr-1 font-semibold",
      error: "",
    },
    input: "outline-none bg-transparent flex-grow appearance-none select-input",
    errorText: "text-red-600 text-xs font-semibold",
  };

  return (
    <div className={`${className.wrapper.default} ${className.wrapper.error}`}>
      <label
        htmlFor={field.name}
        className={`${className.label.default} ${className.label.error}`}
      >
        {label}
      </label>
      <input
        {...field}
        value={field.value ? field.value : ""}
        type="checkbox"
      />
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
      gender: "",
      isActive: 0,
    },
    mode: "all",
    resolver: yupResolver<Inputs>(schema),
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log("🚀 ~ file: page.tsx:74 ~ Page ~ errors:", errors);

  //   console.log(watch("firstName"));
  //   const watchAllFields = watch();
  //   console.log(watchAllFields);

  const selectionItems = [
    {
      id: 0,
      value: "volvo",
      text: "Volvo",
    },
    {
      id: 1,
      value: "saab",
      text: "Saab",
    },
    {
      id: 2,
      value: "mercedes",
      text: "Mercedes",
    },
    {
      id: 3,
      value: "audi",
      text: "Audi",
    },
  ];

  return (
    <>
      {/* <input id="s1" type="checkbox" className="switch" />
      <input id="s1" type="checkbox" />
      <input id="s1" type="radio" /> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-5"
      >
        <TextInput
          label="Name"
          type="text"
          placeHolder="Item"
          useControllerProps={{ control, name: "firstName" }}
          isDisabled={true}
        />
        <TextInput
          label="Age"
          type="num"
          placeHolder="Item"
          useControllerProps={{ control, name: "age" }}
          isDisabled={true}
        />

        <SelectInput
          label="Gender"
          selectionItems={selectionItems}
          placeHolder="Select One"
          useControllerProps={{ control, name: "gender" }}
        />

        <CheckBox
          label="Is Active"
          useControllerProps={{ control, name: "isActive" }}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
