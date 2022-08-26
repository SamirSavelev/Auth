import styled, { css } from "styled-components";

export const Button = styled.button<{ accent?: boolean; disabled?: boolean }>`
  background: #f5f5f5;
  border-radius: 8px;
  padding: 19px 71px;
  color: ${({ theme }) => theme.black};
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  max-width: 200px;
  transition: 0.3s ease-out;
  &:hover {
    background: ${({ theme }) => theme.lightGrey2};
  }
  ${({ accent }) =>
    accent &&
    css`
      color: ${({ theme }) => theme.white};
      max-width: 100%;
      background: ${({ theme }) => theme.blue};
      &:hover {
        background: ${({ theme }) => theme.blueHover};
      }
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      max-width: 100%;
      background: ${({ theme }) => theme.blueDisable};
    `}
`;
