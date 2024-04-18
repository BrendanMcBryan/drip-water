/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledFormRow = styled.div`
  display: flex;
  align-items: center;
  grid-template-columns: 1fr 1fr auto;
  gap: 2.4rem;
  background-color: var(--color-blue-100);

  padding: 1.2rem;

  &:first-child {
    /* padding-top: 0; */
  }

  &:last-child {
    /* padding-bottom: 0; */
  }

  &:not(:last-child) {
    /* border-bottom: 1px solid var(--color-grey-100); */
  }
  /* 
  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  } */
`;

function FormRow({ children }) {
  return <StyledFormRow>{children}</StyledFormRow>;
}

export default FormRow;
