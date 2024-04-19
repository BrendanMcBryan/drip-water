import UpdateHouseholdForm from '../features/households/UpdateHouseholdForm';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Household() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Household</Heading>
      </Row>
      <Row>
        <UpdateHouseholdForm />
      </Row>
    </>
  );
}

export default Household;
