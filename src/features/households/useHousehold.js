import { useQuery } from '@tanstack/react-query';
import { getHousehold } from '../../services/apiHouseholds';

export function useHousehold() {
  const {
    isPending,
    error,
    data: household,
  } = useQuery({ queryKey: ['household'], queryFn: getHousehold });

  return { isPending, error, household };
}
