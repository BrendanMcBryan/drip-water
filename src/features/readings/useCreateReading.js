import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createReading as createReadingApi } from '../../services/apiReadings';
import toast from 'react-hot-toast';

export function useCreateReading() {
  const queryClient = useQueryClient();

  const { mutate: createReading, isPending: isCreating } = useMutation({
    mutationFn: createReadingApi,
    onSuccess: () => {
      toast.success('New Reading added');
      queryClient.invalidateQueries({
        queryKey: ['readings'],
      });
      queryClient.invalidateQueries({ queryKey: ['latestReading'] });

      // reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createReading };
}
