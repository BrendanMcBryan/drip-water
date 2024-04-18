import { useForm } from 'react-hook-form';
import { format } from 'date-fns';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';
import FormField from '../../ui/FormField';
import Spinner from '../../ui/Spinner';

import { useCreateReading } from './useCreateReading';
import { useReadings } from './useReadings';

function CreateReadingForm() {
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { isCreating, createReading } = useCreateReading();
  const { isPendingReadings, readings } = useReadings();

  // console.log('readings >', readings[0].readingAmount);

  let todayAndNow = format(new Date(), "yyyy-MM-dd'T'HH:mm");

  function onSubmit(data) {
    //* send reset function as option to mutation function
    createReading(data, { onSuccess: () => reset() });
  }

  // eslint-disable-next-line no-unused-vars
  function onError(errors) {
    // console.log('red', errors);
    // toast.error(errors);
  }

  if (isPendingReadings) return <Spinner />;
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow error={errors?.readingAmount?.message}>
        <FormField
          label="Reading Amount"
          error={errors?.readingAmount?.message}
        >
          <Input
            disabled={isCreating}
            type="number"
            id="readingAmount"
            defaultValue={readings[0].readingAmount}
            {...register('readingAmount', {
              required: 'Amount is required',
              validate: (value) =>
                value > readings[0].readingAmount ||
                `Reading must be larger than most recent reading (${readings[0].readingAmount.toLocaleString()})`,
            })}
          />
        </FormField>
        <FormField label="Time of reading">
          <Input
            disabled={isCreating}
            type="datetime-local"
            id="timeOfReading"
            {...register('timeOfReading', {
              required: 'Date and Time are required',
            })}
            defaultValue={todayAndNow}
            // placeholder={TestDate}
          />
        </FormField>
        <FormField>
          {/* type is an HTML attribute! */}
          <Button variation="secondary" type="reset">
            Cancel
          </Button>
          <Button disabled={isCreating}> Add reading</Button>
        </FormField>
      </FormRow>
    </Form>
  );
}

export default CreateReadingForm;
