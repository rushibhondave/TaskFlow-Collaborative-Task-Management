
import { useForm } from 'react-hook-form';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('User Registration Data:', data);
    // Implement registration API call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-lg">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
            <input
              type="text"
              {...register('fullName', { required: 'Full Name is required' })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required', minLength: 6 })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <label className="block mb-1">Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                // eslint-disable-next-line no-undef
                validate: (value) => value === getValues('password') || 'Passwords do not match',
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Role</label>
            <select
              {...register('role', { required: 'Role is required' })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="fleetManager">Fleet Manager</option>
              <option value="driver">Driver</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
