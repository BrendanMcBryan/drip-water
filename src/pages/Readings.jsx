import ReadingsTable from '../features/readings/ReadingsTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Readings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Readings</Heading>
        <p>filter sort</p>
      </Row>
      <Row>
        <ReadingsTable />
      </Row>
    </>
  );
}

export default Readings;
