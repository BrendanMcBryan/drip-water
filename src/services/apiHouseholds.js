import supabase from './supabase';

export async function getHousehold() {
  let { data, error } = await supabase.from('households').select('*').single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }
  // console.log(data);
  return data;
}
// We expect a newSetting object that looks like {setting: newValue}
export async function updateHousehold(newHouseholdSetting) {
  const { data, error } = await supabase
    .from('households')
    .update(newHouseholdSetting)
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq('id', 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Household setting could not be updated');
  }
  return data;
}
