import styled from 'styled-components';

const ButtonIcon = styled.button`
  background: none;
  background-color: var(--color-grey-200);
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-blue-100);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-brand-600);
    &:hover {
      color: white;
    }
  }
`;

export default ButtonIcon;
