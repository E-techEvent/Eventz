import { useState } from "react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      newErrors.email = "The email is not valid";
    }
    if (password.length <= 8) {
      newErrors.password = "Password should be more than 8 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", { email, password });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-blue-600">E-Tech</h2>
        <h3 className="text-2xl font-bold">Log in</h3>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Email address</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-md"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded-md">Log in</button>
        </form>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <div className="flex justify-center space-x-4">
          <a href="#" className="p-3 bg-red-500 text-white rounded-full">
            <FaGoogle size={20} />
          </a>
          <a href="#" className="p-3 bg-blue-600 text-white rounded-full">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="p-3 bg-blue-400 text-white rounded-full">
            <FaTwitter size={20} />
          </a>
        </div>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account? <span className="text-blue-600 cursor-pointer"><a href="/auth/signup">Signup</a></span>
        </p>
      </div>
    </div>
  );
};

export default Login;
