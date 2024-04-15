/* eslint-disable no-unused-vars */
import { interval, intervalToDuration } from 'date-fns';
import supabase from './supabase';

export async function getReadings() {
  let { data: readings, error } = await supabase
    .from('readings')
    .select('*')
    .order('timeOfReading', { ascending: true });

  // * add additinal data like usage and duration since last readings
  let usage, duration;

  const readingsPlus = readings.map((reading, i) => {
    // console.log(i);
    if (i === 0) {
      usage = '-';
      duration = '-';
    } else {
      usage = Math.abs(reading.readingAmount - readings[i - 1].readingAmount);
      duration = intervalToDuration({
        start: new Date(reading.timeOfReading),
        end: new Date(readings[i - 1].timeOfReading),
      });
    }

    // * return readings with additional Data
    return { ...reading, usage, duration };
  });
  // console.log('readings plus', readingsPlus);
  // readings = { readings, ...newValues };

  if (error) {
    console.log(error);
    throw new Error('Readings could not be loaded');
  }

  // * return Readings plus additional data in reverse order (latest entry on top)
  return readingsPlus.reverse();
}

export async function deleteReading(id) {
  const { data, error } = await supabase.from('readings').delete().eq('id', id);
  if (error) {
    console.log(error);

    throw new Error('Reading could not be deleted');
  }
  return data;
}
