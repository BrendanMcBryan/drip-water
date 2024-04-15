import supabase from './supabase';

export async function getReadings() {
  const { data: readings, error } = await supabase.from('readings').select('*');

  if (error) {
    console.log(error);
    throw new Error('Readinga could not be loaded');
  }
  return readings;
}
