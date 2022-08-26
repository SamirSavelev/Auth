import styled from "styled-components";

const ErrorBlock = styled.div`
  padding: 20px;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 27px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;
const Container = styled.div`
  height: 100%;
  width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormSectionStyles = { Container, StyledForm, ErrorBlock };
