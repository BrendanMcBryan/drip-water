import CurrentProfile from '../features/profiles/CurrentProfile';
import ReadingsTable from '../features/readings/ReadingsTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Profile() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Profile</Heading>
      </Row>
      <CurrentProfile />
      <ReadingsTable />
    </>
  );
}

export default Profile;
