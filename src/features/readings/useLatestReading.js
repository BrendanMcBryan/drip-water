import { useQuery } from '@tanstack/react-query';
import { getLatestReading } from '../../services/apiReadings';

export function useLatestReading() {
  const {
    isPending: isPendingLatest,
    data: latestReading,
    error,
  } = useQuery({
    queryKey: ['latestReading'],
    queryFn: getLatestReading,
    staleTime: 1 * 1000,
  });
  return { isPendingLatest, latestReading, error };
}
