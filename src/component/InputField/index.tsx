import React from "react";

import { InputFieldType } from './types'
import { useController } from "react-hook-form";
import MaterialTextInput from "../MaterialTextInput";

const InputField = ({
  trigger,
  blurTrigger,
  valuePropName,
  component: Component = MaterialTextInput,
  ...rest
}: InputFieldType) => {
  const {
    field: { onBlur, onChange, value, ref },
    fieldState: { error, isTouched },
  } = useController({ ...rest });
  return (
    <Component
      {...{
        [valuePropName || "value"]: value,
        [trigger || "onChangeText"]: onChange,
        [blurTrigger || "onBlur"]: onBlur,
      }}

      inputRef={ref}
      error={(isTouched || error) ? error?.message : undefined}
      {...rest}
    />
  );
};

export default InputField;
