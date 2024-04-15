/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { format } from 'date-fns';

// import Table from '../../ui/Table';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 2.2fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const StyledDate = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const StyledReading = styled.div`
  font-family: 'Sono';
  font-weight: 600;
`;

const StyledUse = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;
const StyledDuration = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
`;

function ReadingRow({ reading }) {
  const {
    id: readingId,
    created_at,
    userId,
    readingAmount,
    usage,
    duration,
    timeOfReading,
  } = reading;

  return (
    <TableRow role="row">
      <StyledDate>{format(new Date(timeOfReading), 'MMM dd yyyy')}</StyledDate>
      <StyledReading>{readingAmount}</StyledReading>
      <StyledUse>{usage}</StyledUse>
      <StyledDuration>{duration}</StyledDuration>
    </TableRow>
  );
}

export default ReadingRow;
