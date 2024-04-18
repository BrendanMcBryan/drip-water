// import { useState } from 'react';
import CreateReadingForm from '../features/readings/CreateReadingForm';
import ReadingsTable from '../features/readings/ReadingsTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
// import Button from '../ui/Button';

function Readings() {
  // const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Readings</Heading>
        <p>filter sort</p>
      </Row>
      <Row>
        {' '}
        <CreateReadingForm />
      </Row>
      <Row>
        {/* <Button onClick={() => setShowForm((show) => !show)}>
          Add new reading
        </Button> */}
        <ReadingsTable />
      </Row>
    </>
  );
}

export default Readings;
