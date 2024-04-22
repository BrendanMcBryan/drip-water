/* eslint-disable no-unused-vars */
import { format } from 'date-fns';
import Heading from '../../ui/Heading';
import Spinner from '../../ui/Spinner';
import { useProfile } from './useProfile';
import { useProfileHousehold } from './useProfileHousehold';
import { useState } from 'react';

function CurrentProfile() {
  const [homeName, setHomeName] = useState('House Hold Name');
  const {
    isPending: isPendingProfile,

    profile: { avatar, profileName, householdId, created_at } = {},
  } = useProfile();

  const { isPending: isPendingHousehold, household } =
    useProfileHousehold(householdId);

  if (isPendingProfile || isPendingHousehold) return <Spinner />;

  return (
    <div>
      <Heading as="h2">{profileName}</Heading>
      <Heading as="h6">Profile Created: {format(created_at, 'PPP')}</Heading>
      <div>ProfileName: {profileName}</div>
      <div>avatar: {avatar}</div>

      <div>
        partof: {homeName} , {household.householdName}
      </div>
    </div>
  );
}

export default CurrentProfile;
