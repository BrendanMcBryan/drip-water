import { useQuery } from '@tanstack/react-query';
import { getReadings } from '../../services/apiReadings';

export function useReadings() {
  const {
    isPending: isPendingReadings,
    data: readings,
    error,
  } = useQuery({
    queryKey: ['readings'],
    queryFn: getReadings,
  });

  return { isPendingReadings, readings, error };
}
