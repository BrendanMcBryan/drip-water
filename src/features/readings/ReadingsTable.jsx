/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getReadings } from '../../services/apiReadings';

import Spinner from '../../ui/Spinner';
import ReadingRow from './ReadingRow';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.8fr 2.2fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);

  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function ReadingsTable() {
  const {
    isPending,
    data: readings,
    error,
  } = useQuery({
    queryKey: ['readings'],
    queryFn: getReadings,
  });

  if (isPending) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>Date</div>
        <div>Reading</div>
        <div>Use</div>
        <div>Duration</div>
      </TableHeader>
      {readings.map((reading) => (
        <ReadingRow reading={reading} key={reading.id} />
      ))}
    </Table>
  );
}

export default ReadingsTable;
