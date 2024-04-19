import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateHousehold } from '../../services/apiHouseholds';
import toast from 'react-hot-toast';

export function useUpdateHousehold() {
  const queryClient = useQueryClient();

  const { mutate: updateHouseholeSetting, isPending: isEditing } = useMutation({
    mutationFn: updateHousehold,
    onSuccess: () => {
      toast.success('Household Setting Updated');
      queryClient.invalidateQueries({ queryKey: ['household'] });
    },
    onError: (error) => toast.error(error.message),
  });
  return { updateHouseholeSetting, isEditing };
}
