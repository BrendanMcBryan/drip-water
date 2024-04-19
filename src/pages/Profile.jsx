import CurrentProfile from '../features/profiles/CurrentProfile';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Profile() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Profile</Heading>
      </Row>
      <CurrentProfile />
    </>
  );
}

export default Profile;
