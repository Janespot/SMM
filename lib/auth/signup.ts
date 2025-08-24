// lib/auth.ts

import { supabase } from "@/lib/supabaseClient";

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
    await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
        redirectTo: `${window.location.origin}/profile`, // or wherever
    },
    });
};

// Apple OAuth
export const signInWithApple = async () => {
    await supabase.auth.signInWithOAuth({
    provider: "apple",
    options: {
        redirectTo: `${window.location.origin}/profile`,
    },
    });
};