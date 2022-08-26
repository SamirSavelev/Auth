import { FC } from "react";
import { IPropsInput } from "../../../interfaces";
import { InputStyles } from "./styles";

const { StyledInput, StyledLabel, ErrorTitle } = InputStyles;

const Input: FC<IPropsInput> = ({
  label,
  isError,
  type,
  name,
  placeholder,
  error,
}) => {
  return (
    <>
      <StyledLabel>
        {label}
        <StyledInput
          type={type}
          isError={isError}
          name={name}
          placeholder={placeholder}
        />
        {isError ? <ErrorTitle>{error}</ErrorTitle> : null}
      </StyledLabel>
    </>
  );
};

export default Input;
