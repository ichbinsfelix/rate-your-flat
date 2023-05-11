import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseApiKey: string = process.env.NEXT_PUBLIC_SUPABASE_API_KEY ?? ''

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseApiKey)

export default supabase
