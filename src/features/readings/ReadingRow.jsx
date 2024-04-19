/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { LuTrash } from 'react-icons/lu';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

// import Button from '../../ui/Button';
import ButtonIcon from '../../ui/ButtonIcon';

import { useDeleteReading } from './useDeletereading';
import Modal from '../../ui/Modal';
import Menus from '../../ui/Menus';
import { HiPencil, HiSquare2Stack } from 'react-icons/hi2';
import ConfirmDelete from '../../ui/ConfirmDelete';
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
  const { isDeleting, deleteReading } = useDeleteReading();
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
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={readingId} />

            <Menus.List id={readingId}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                // onClick={handleDuplicate}
                // disabled={isCreating}
              >
                Duplicate
              </Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<LuTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              {/* <CreateCabinForm cabinToEdit={cabin} /> */}
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="Reading"
                disabled={isDeleting}
                onConfirm={() => deleteReading(readingId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
      {/* <ButtonIcon
        disabled={isDeleting}
        onClick={() => deleteReading(readingId)}
      >
        <LuTrash />
      </ButtonIcon> */}
    </TableRow>
  );
}

export default ReadingRow;

ReadingRow.propTypes = {
  reading: PropTypes.object,
};
