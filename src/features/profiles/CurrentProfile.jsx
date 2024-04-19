import { format } from 'date-fns';
import Heading from '../../ui/Heading';
import Spinner from '../../ui/Spinner';
import { useProfile } from './useProfile';
import { useProfileHousehold } from './useProfileHousehold';

function CurrentProfile() {
  const {
    isPending: isPendingProfile,

    profile: { avatar, profileName, householdId, created_at } = {},
  } = useProfile();

  const {
    isPending: isPendingHousehold,

    household: { householdName },
  } = useProfileHousehold(householdId);

  if (isPendingProfile || isPendingHousehold) return <Spinner />;

  return (
    <div>
      <Heading as="h2">{profileName}</Heading>
      <Heading as="h6">Profile Created: {format(created_at, 'PPP')}</Heading>
      <div>ProfileName: {profileName}</div>
      <div>avatar: {avatar}</div>

      <div>partof: {householdName}</div>
    </div>
  );
}

export default CurrentProfile;
