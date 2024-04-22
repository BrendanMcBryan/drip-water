/* eslint-disable no-unused-vars */
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import FormField from '../../ui/FormField';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useHousehold } from './useHousehold';
import { useUpdateHousehold } from './useUpdateHousehold';
import Row from '../../ui/Row';

function UpdateHouseholdForm() {
  const {
    isPending,
    household: {
      householdName,
      serviceProvider,
      providerFee,
      serviceCharge,
      civilFee,
    } = {},
  } = useHousehold();

  const { updateHouseholeSetting, isEditing } = useUpdateHousehold();

  // console.log(serviceProvider, providerFee, serviceCharge, civilFee);
  if (isPending) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateHouseholeSetting({ [field]: value });
  }

  return (
    <>
      <Row>{householdName}</Row>
      <Row>
        <Form>
          <FormRow>
            <FormField label="Service Provider">
              <Input
                type="text"
                id="serviceProvider"
                defaultValue={serviceProvider}
                disabled={isEditing}
                onBlur={(e) => handleUpdate(e, 'serviceProvider')}
              />
            </FormField>
            <FormField label="Provider Fee">
              <Input
                type="number"
                id="providerFee"
                defaultValue={providerFee}
                disabled={isEditing}
                onBlur={(e) => handleUpdate(e, 'providerFee')}
              />
            </FormField>
          </FormRow>
          <FormRow>
            <FormField label="Service Charge">
              <Input
                type="number"
                id="serviceCharge"
                defaultValue={serviceCharge}
                disabled={isEditing}
                onBlur={(e) => handleUpdate(e, 'serviceCharge')}
              />
            </FormField>
            <FormField label="Civil Fee">
              <Input
                type="number"
                id="civilFee"
                defaultValue={civilFee}
                disabled={isEditing}
                onBlur={(e) => handleUpdate(e, 'civilFee')}
              />
            </FormField>
          </FormRow>
        </Form>
      </Row>
    </>
  );
}

export default UpdateHouseholdForm;
