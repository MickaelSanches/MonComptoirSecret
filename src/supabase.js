import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tyutwoaglfeknnrkugzd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5dXR3b2FnbGZla25ucmt1Z3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3NDAzNzcsImV4cCI6MjAzNzMxNjM3N30.PxQ9WhvxZgfOMmOjfJvWlc3XLeJ3Rfzi8KffsnIImpo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
