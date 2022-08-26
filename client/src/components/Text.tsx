import React, { ReactNode } from "react";
import styled from "styled-components";

interface IText {
  heading1?: boolean;
  heading2?: boolean;
  subtitle?: boolean;
  height?: string;
  size?: number;
  margin?: string;
  multiline?: boolean;
  color?: string;
  nowrap?: boolean;
  weight?: string;
  children?: ReactNode;
  pointer?: boolean;
  onClick?: any;
  style?: any;
  bold?: boolean;
}

const Text: React.FC<IText> = ({ children, ...props }) => {
  return <TextContainer {...props}>{children}</TextContainer>;
};

const TextContainer = styled.div<IText>`
  font-size: ${({ ...props }) =>
    props.heading1
      ? "54px"
      : props.heading2
      ? "40px"
      : props.subtitle
      ? "20px"
      : props.size
      ? `${props.size}px`
      : "14px"};
  font-weight: ${({ ...props }) =>
    props.heading1 || props.bold
      ? "600"
      : props.heading2
      ? "400"
      : props.weight
      ? props.weight
      : "400"};
  line-height: ${({ ...props }) =>
    props.heading1
      ? "130%"
      : props.subtitle
      ? "180%"
      : props.height
      ? props.height
      : "100%"};
  color: ${({ theme, ...props }) => (props.color ? props.color : theme.black)};
  margin: ${({ margin }) => (margin ? margin : "0")};
  white-space: ${({ ...props }) =>
    props.nowrap ? "nowrap" : props.multiline ? "pre-line" : "unset"};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "default")};
  @media (max-width: 1200px) {
    font-size: ${({ ...props }) =>
      props.heading1
        ? "40px"
        : props.heading2
        ? "28px"
        : props.subtitle
        ? "16px"
        : props.size
        ? "14px"
        : "14px"};
  }
  @media (max-width: 900px) {
    font-size: ${({ ...props }) =>
      props.heading1
        ? "32px"
        : props.heading2
        ? "22px"
        : props.subtitle
        ? "14px"
        : props.size
        ? "14px"
        : "14px"};
  }
  @media (max-width: 425px) {
    font-size: ${({ ...props }) =>
      props.heading1
        ? "22px"
        : props.heading2
        ? "18px"
        : props.subtitle
        ? "14px"
        : props.size
        ? "14px"
        : "14px"};
  } ;
`;
export default Text;
