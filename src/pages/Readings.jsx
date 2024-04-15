import { useEffect } from 'react';
import { getReadings } from '../services/apiReadings';

import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Readings() {
  useEffect(function () {
    getReadings().then((readings) => console.log(readings));
  }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Readings</Heading>
      </Row>
    </>
  );
}

export default Readings;
