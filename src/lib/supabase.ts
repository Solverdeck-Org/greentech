import { createClient } from '@supabase/supabase-js';
import { auth } from '@clerk/nextjs/server';

export const createClerkSupabaseClient = async () => {
  const { getToken } = await auth();
  
  // Fetch the custom Supabase token from Clerk
  const supabaseToken = await getToken({ template: 'supabase' });

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${supabaseToken}`,
        },
      },
    }
  );
};