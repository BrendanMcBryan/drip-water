import { formatDistance } from 'date-fns';
import supabase from './supabase';

export async function getReadings() {
  let { data: readings, error } = await supabase.from('readings').select('*');

  let usage = '';
  let duration = '';

  console.log(typeof readings[0].readingAmount, readings[0].readingAmount);

  // const readingsPlus = { ...readings[0], ...newValues };
  const readingsPlus = readings.map((reading, i) => {
    // console.log(i);
    if (i === 0) {
      usage = '-';
      duration = '-';
    } else {
      usage = reading.readingAmount - readings[i - 1].readingAmount;
      duration = formatDistance(
        reading.timeOfReading,
        readings[i - 1].timeOfReading
      );
    }
    return { ...reading, usage, duration };
  });
  console.log('readings plus', readingsPlus);
  // readings = { readings, ...newValues };

  if (error) {
    console.log(error);
    throw new Error('Readinga could not be loaded');
  }
  return readingsPlus;
}
