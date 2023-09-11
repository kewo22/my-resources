"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { number, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../_components/ui/input";
import Select from "../_components/ui/select";
import CheckBox from "../_components/ui/checkbox";
import RadioButton from "../_components/ui/raduibutton";
import Button from "../_components/ui/button";

export interface Inputs {
  firstName: string;
  age?: number | null;
  dob?: string;
  gender: string;
  isActive?: number | null;
  isEnabled?: string;
}

const schema = object().shape({
  firstName: string().required("First Name is required"),
  age: number()
    .integer("Must be a valid number.")
    .typeError("Must be a valid number.")
    .min(1, "Min value is 1.")
    .required()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? null : value
    ),
  dob: string().required("DOB is required"),
  gender: string()
    .required("Required")
    .oneOf(["", "volvo", "saab", "mercedes", "audi"], "Invalid Selection")
    .label("Selected Country"),
  isActive: number()
    .required()
    .transform((value, originalValue) => {
      if (originalValue === null) {
        return null;
      } else {
        // return Boolean(originalValue) ? 1 : 0; // if not required
        return Boolean(originalValue) ? 1 : null; // if required
      }
    }),
  isEnabled: string().required("A radio option is required"),
});

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
      dob: "",
      gender: "",
      isActive: null,
      isEnabled: "",
    },
    mode: "all",
    resolver: yupResolver<Inputs>(schema),
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log("🚀 ~ file: page.tsx:74 ~ Page ~ errors:", errors);

  const [isDis, setIsDis] = useState(true);

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
        <Input
          label="Name"
          type="text"
          placeHolder="Item"
          useControllerProps={{ control, name: "firstName" }}
          // isDisabled={isDis}
        />

        <Input
          label="Age"
          type="num"
          placeHolder="Item"
          useControllerProps={{ control, name: "age" }}
          // isDisabled={!isDis}
        />

        <Input
          label="DOB"
          type="date"
          placeHolder="Item"
          useControllerProps={{ control, name: "dob" }}
          // isDisabled={!isDis}
        />

        <Select
          label="Gender"
          selectionItems={selectionItems}
          placeHolder="Select One"
          useControllerProps={{ control, name: "gender" }}
          isDisabled={false}
        />

        <CheckBox
          label="Is Active"
          useControllerProps={{ control, name: "isActive" }}
          // isDisabled
        />

        <CheckBox
          label="Is Active"
          useControllerProps={{ control, name: "isActive" }}
          isDisabled
        />

        <RadioButton
          label="Is Enabled - A"
          value="A"
          useControllerProps={{ control, name: "isEnabled" }}
        />

        <RadioButton
          label="Is Enabled - B"
          value="B"
          useControllerProps={{ control, name: "isEnabled" }}
        />

        <Button label="Save" type="submit" />
      </form>
    </>
  );
}
