import { Link } from "react-router";

function Login() {
  return (
    <div className="bg-white p-6 rounded shadow-md w-96 mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
      <p className="text-sm mt-4 text-center">
        Dont have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;
