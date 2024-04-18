/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledFormField = styled.div`
  display: grid;
  /* width: 50%; */
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 1rem;

  /* padding: 1.2rem 0; */

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    /* border-bottom: 1px solid var(--color-grey-100); */
  }

  &:has(button) {
    display: flex;
    text-align: right;
    justify-content: flex-end;
    gap: 1.2rem;
    margin-left: auto;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;
// eslint-disable-next-line
const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormField({ label, error, children }) {
  return (
    <StyledFormField>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormField>
  );
}

export default FormField;
