"use client";
import { useState } from 'react';
import { login } from '@/utils/auth';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setError(''); // Clear any previous error
    try {
      const data = await login(username, password);
      if (data.access) {
        router.push('/welcome');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again later.');
      console.error(err); // Log error to the console for debugging
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-96 max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back!</h2>
        
        <div className="space-y-6">
          <div>
            <input
              type="text"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div>
            <input
              type="password"
              className="w-full p-4 bg-gray-100 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button
            onClick={handleLogin}
            className="w-full py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-indigo-700 focus:outline-none transition duration-300"
          >
            Log In
          </button>
        </div>
        
        <p className="text-center text-gray-600 mt-6">
          Don't have an account? 
          <a href="/signup" className="text-indigo-600 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
