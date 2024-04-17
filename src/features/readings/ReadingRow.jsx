/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import Button from '../../ui/Button';
import ButtonIcon from '../../ui/ButtonIcon';
import { LuTrash } from 'react-icons/lu';
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { deleteReading } from '../../services/apiReadings';
// import Table from '../../ui/Table';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 0.75fr 1fr 1fr 32px;

  column-gap: 2.4rem;
  align-items: center;
  padding: 0.75rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const StyledDate = styled.div`
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--color-grey-500);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledReading = styled.div`
  text-align: center;
  font-weight: 800;
  color: var(--color-blue-700);
`;

const StyledUse = styled.div`
  text-align: center;

  font-weight: 800;
  color: var(--color-brand-800);
`;
const StyledDuration = styled.div`
  text-align: center;

  font-weight: 500;
  color: var(--color-grey-500);
`;

function ReadingRow({ reading }) {
  const {
    id: readingId,
    created_at,
    userId,
    readingAmount,
    usage,
    useRate,
    duration: { years, days, hours, minutes },
    timeOfReading,
  } = reading;

  const queryClient = useQueryClient();
  const { isPending, mutate } = useMutation({
    mutationFn: deleteReading,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['readings'] });
    },
    onError: (error) => alert(error.message),
  });

  let durationSting = '';
  if (years) {
    durationSting += Math.abs(years) + 'y, ';
  }
  if (days) {
    durationSting += Math.abs(days) + 'd, ';
  }
  if (hours) {
    durationSting += Math.abs(hours) + 'h, ';
  }
  if (minutes) {
    durationSting += Math.abs(minutes) + 'm';
  }

  return (
    <TableRow role="row">
      <StyledDate>
        {/* <span>{`w${format(new Date(timeOfReading), 'w')}`}</span> */}
        <span>{`${format(new Date(timeOfReading), 'PPP')}`}</span>
        <span>{`${format(new Date(timeOfReading), 'p')}`}</span>

        {/* format(new Date(timeOfReading), 'PPPPpp') */}
      </StyledDate>
      <StyledReading>{readingAmount?.toLocaleString()}</StyledReading>
      <StyledUse>{usage}</StyledUse>
      <StyledDuration>{durationSting}</StyledDuration>
      <StyledUse>{useRate}</StyledUse>

      <ButtonIcon disabled={isPending} onClick={() => mutate(readingId)}>
        <LuTrash />
      </ButtonIcon>
    </TableRow>
  );
}

export default ReadingRow;

ReadingRow.propTypes = {
  reading: PropTypes.object,
};
