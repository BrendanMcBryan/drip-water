import { useQuery } from '@tanstack/react-query';
import { getProfileHousehold } from '../../services/apiHouseholds';

export function useProfileHousehold(profileHouseholdId) {
  const {
    isPending,
    error,
    data: household,
  } = useQuery({
    queryKey: ['household'],
    queryFn: () => getProfileHousehold(profileHouseholdId),
  });

  return { isPending, error, household };
}
