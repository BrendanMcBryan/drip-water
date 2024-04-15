import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://Bvkwkowafesvqqxzzodfi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrd2tvd2FmZXN2cXF4enpvZGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxOTk1ODIsImV4cCI6MjAyODc3NTU4Mn0.7AOe1Uz4nzJd_t_hanO1ZlrDYMjzADdHjecW0Su7VVM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
