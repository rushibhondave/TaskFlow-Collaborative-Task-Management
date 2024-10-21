// src/pages/AuthForm.jsx
import  { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(`${isLogin ? 'Login' : 'Register'} Data:`, data);
    // Implement login or registration API call here
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-lg">
        <motion.h2
          className="text-2xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {isLogin ? 'Login' : 'Register'}
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!isLogin && (
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                type="text"
                {...register('fullName', { required: 'Full Name is required' })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName.message}</p>
              )}
            </div>
          )}

          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {!isLogin && (
            <div>
              <label className="block mb-1">Confirm Password</label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          )}

          <motion.button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? 'Login' : 'Register'}
          </motion.button>
        </motion.form>

        <motion.p
          className="text-center text-sm cursor-pointer text-blue-600 hover:underline"
          onClick={toggleForm}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {isLogin ? "Don't have an account? Register here" : 'Already have an account? Login here'}
        </motion.p>
      </div>
    </div>
  );
}
