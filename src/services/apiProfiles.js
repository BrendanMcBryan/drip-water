import supabase from './supabase';

export async function getCurrentProfile() {
  let { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }
  // console.log(data);
  return data;
}
