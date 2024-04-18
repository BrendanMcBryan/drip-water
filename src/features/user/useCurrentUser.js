import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiUsers';

export function useCurrentUser() {
  const {
    isPending: isPendingUser,
    data: user,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return { isPendingUser, user, error };
}
