export interface IPropsInput {
  label: string;
  isError: boolean | "" | undefined;
  type: "text" | "password";
  name: string;
  placeholder: string;
  error: string | undefined;
}

export interface IFlex {
  flexStart?: boolean;
  spaceBetween?: boolean;
  gap?: string;
  alignItems?: string;
  margin?: string;
}
