import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteReading as deleteReadingApi } from '../../services/apiReadings';
import toast from 'react-hot-toast';

export function useDeleteReading() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteReading } = useMutation({
    mutationFn: deleteReadingApi,
    onSuccess: () => {
      toast.success('Reading Succesfully Deleted');
      queryClient.invalidateQueries({ queryKey: ['readings'] });
      queryClient.invalidateQueries({ queryKey: ['latestReading'] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isDeleting, deleteReading };
}
