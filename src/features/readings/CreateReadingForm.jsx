/* eslint-disable no-unused-vars */
import toast from 'react-hot-toast';

import { useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';

import FormRow from '../../ui/FormRow';
import { createReading, getLatestReading } from '../../services/apiReadings';
import { format } from 'date-fns';
import Spinner from '../../ui/Spinner';

function CreateReadingForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const todayAndNow = format(new Date(), "yyyy-MM-dd'T'hh:mm");
  console.log(todayAndNow);
  // const dateControl = document.querySelector('input[type="datetime-local"]');
  // dateControl.value = todayAndNow;

  const {
    isPending: isPendingLatest,
    data: latestReading,
    error,
  } = useQuery({
    queryKey: ['latestReading'],
    queryFn: getLatestReading,
  });

  // console.log('>latest', latestReading);

  // const TestDate = format(new Date(), 'MM/dd/yyyy, hh:mm aa');

  // console.log(TestDate);
  const queryClient = useQueryClient();

  // const { errors } = formState;

  // console.log(errors);

  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: createReading,
    onSuccess: () => {
      toast.success('New Reading added');
      queryClient.invalidateQueries({ queryKey: ['readings'] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
    console.log(data);
  }

  function onError(errors) {
    console.log('red', errors);
  }

  if (isPendingLatest) return <Spinner />;
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Reading Amount">
        <Input
          type="number"
          id="readingAmount"
          defaultValue={latestReading[0].readingAmount}
          {...register('readingAmount', {
            required: 'this field is required',
            validate: (value) =>
              value > latestReading[0].readingAmount ||
              `Must be larger than most recent reading (${latestReading[0].readingAmount})`,
          })}
        />
      </FormRow>

      <FormRow label="Time of reading">
        <Input
          type="datetime-local"
          id="timeOfReading"
          {...register('timeOfReading')}
          value={todayAndNow}
          // placeholder={TestDate}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}> Add reading</Button>
      </FormRow>
    </Form>
  );
}

export default CreateReadingForm;
