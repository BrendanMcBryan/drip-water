import { useQuery } from '@tanstack/react-query';

import { getCurrentProfile } from '../../services/apiProfiles';

export function useProfile() {
  const {
    isPending,
    error,
    data: profile,
  } = useQuery({ queryKey: ['profile'], queryFn: getCurrentProfile });

  return { isPending, error, profile };
}
