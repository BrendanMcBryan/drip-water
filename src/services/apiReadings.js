/* eslint-disable no-unused-vars */
import {
  differenceInHours,
  differenceInMinutes,
  interval,
  intervalToDuration,
} from 'date-fns';
import supabase from './supabase';

export async function getReadings() {
  let { data: readings, error } = await supabase
    .from('readings')
    .select('*')
    .order('timeOfReading', { ascending: true });

  // * add additinal data like usage and duration since last readings
  let usage = '-';
  let duration = 'na';
  let durationHours = 0;
  let useRate = '';

  const readingsPlus = readings.map((reading, i) => {
    // console.log(i);
    if (i === 0) {
      usage = '-';
      duration = 'na';
      useRate = '';
      durationHours = 0;
    } else {
      usage = Math.abs(reading.readingAmount - readings[i - 1].readingAmount);
      duration = intervalToDuration({
        start: new Date(readings[i - 1].timeOfReading),
        end: new Date(reading.timeOfReading),
      });
      durationHours =
        differenceInMinutes(
          new Date(reading.timeOfReading),
          new Date(readings[i - 1].timeOfReading)
        ) / 60;

      useRate = (usage / durationHours).toFixed(2);
    }
    console.log(
      'user rate',
      typeof useRate,
      useRate,
      'duration hours:',
      typeof durationHours,
      durationHours
    );

    // * return readings with additional Data
    return { ...reading, usage, duration, useRate };
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
