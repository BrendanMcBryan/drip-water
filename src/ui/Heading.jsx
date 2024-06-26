import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 300;
    `}
  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 1.8rem;
      font-weight: 100;
    `}
  ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 3rem;
      font-weight: 400;
    `}
  ${(props) =>
    props.as === 'h5' &&
    css`
      font-size: 1.25;
      font-weight: 700;
      text-align: right;
      color: var(--color-blue-700);
    `}
  ${(props) =>
    props.as === 'h6' &&
    css`
      font-size: 0.75;
      font-weight: 700;

      color: var(--color-brand-700);
    `}


    /* text-align: center; */
  line-height: 1.4;
`;

export default Heading;
