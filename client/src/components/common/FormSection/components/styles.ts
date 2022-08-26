import { Field } from "formik";
import styled, { css } from "styled-components";

const ErrorTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.red};
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.textBlack};
`;

const StyledInput = styled(Field)<{ isError: boolean }>`
  width: 640px;
  padding: 20px;
  background-color: ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.textDarkGrey};
  border-radius: 8px;
  ${({ isError, theme }) =>
    isError &&
    css`
      border: 1px solid ${theme.red};
      caret-color: ${theme.red};
    `};
`;

export const InputStyles = { ErrorTitle, StyledLabel, StyledInput };
