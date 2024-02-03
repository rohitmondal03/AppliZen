import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL as "",
  process.env.SUPABASE_ANON_KEY as "",
)