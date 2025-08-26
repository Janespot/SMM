import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export async function signUp(email: string, password: string, name: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name
      },
    },
  });

  if (error) throw error;
  return data;
}

// Google OAuth
export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
        redirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (error) {
    console.error('Google sign-in error:', error.message);
  }
};

// // Apple OAuth
// export const signInWithApple = async () => {
//     await supabase.auth.signInWithOAuth({
//     provider: "apple",
//     options: {
//         redirectTo: `${window.location.origin}/profile`,
//     },
//     });
// };