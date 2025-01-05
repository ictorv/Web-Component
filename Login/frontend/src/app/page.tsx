'use client'; // This ensures the component is treated as a client-side component

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { isAuthenticated } from '../utils/auth'; // Assuming this is where you check auth status

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // State to track if the auth check is done

  useEffect(() => {
    // Simulate an async check for authentication status
    const checkAuth = () => {
      if (isAuthenticated()) {
        console.log("Authenticated, redirecting to admin...");
        router.push('/admin');
      } else {
        console.log("Not authenticated, redirecting to login...");
        router.push('/login');
      }
    };

    checkAuth();

    // After the auth check, set loading to false
    setLoading(false);
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; // Render loading spinner or placeholder while redirecting
  }

  return null; // You can keep it null or render nothing, since you're handling redirection logic already
}
