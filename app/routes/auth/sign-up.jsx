import React, { useState } from 'react';
import Image from "../../../assets/images/event-image.jpg";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // First name validation
    if (!formData.firstName.trim()) {
      tempErrors.firstName = "First name is required";
      isValid = false;
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      tempErrors.lastName = "Last name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Terms acceptance validation
    if (!formData.acceptTerms) {
      tempErrors.acceptTerms = "You must accept the Terms of Service";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('Form submitted successfully:', formData);
        setFormSuccess(true);
        
        // Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false
        });
      } catch (error) {
        console.error('Submission error:', error);
        setErrors({
          ...errors,
          form: "An error occurred while creating your account. Please try again."
        });
      }
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="m-auto w-full max-w-6xl flex overflow-hidden rounded-lg shadow-2xl">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 bg-white p-12">
          <div className="max-w-md mx-auto">
            <h1 className="text-blue-900 text-xl font-bold mb-1">E-Tech</h1>
            <h2 className="text-3xl font-bold mb-6">Create an account</h2>

            {formSuccess ? (
              <div className="bg-green-100 border border-green-500 text-green-700 p-4 rounded mb-6">
                Your account has been created successfully! Please check your email to verify your account.
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {errors.form && (
                  <div className="bg-red-100 border border-red-500 text-red-700 p-4 rounded mb-6">
                    {errors.form}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className={`w-full border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} p-2.5 rounded`}
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className={`w-full border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} p-2.5 rounded`}
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2.5 rounded`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} p-2.5 rounded`}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                  )}
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className={`w-full border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} p-2.5 rounded`}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                  )}
                </div>

                <div className="mb-6 flex items-start">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    className="mt-1 mr-2"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                  />
                  <div>
                    <label htmlFor="acceptTerms" className="text-sm">
                      I accept the E-tech Terms of Service and have read the Privacy Policy
                    </label>
                    {errors.acceptTerms && (
                      <p className="text-red-500 text-sm mt-1">{errors.acceptTerms}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2.5 rounded font-medium mb-4 hover:bg-blue-800 disabled:bg-blue-300 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex justify-center items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating account...
                    </span>
                  ) : (
                    "Create account"
                  )}
                </button>

                <div className="text-center text-sm text-gray-500 mb-4">or</div>

                <div className="flex justify-center mb-6">
                  <button
                    type="button"
                    className="flex items-center justify-center border border-gray-300 rounded-full p-2 hover:bg-gray-50"
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                        <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                        <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                        <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                      </g>
                    </svg>
                  </button>
                </div>

                <div className="text-center">
                  <a href="/login" className="text-blue-900 font-medium">
                    Login
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-blue-900/40 backdrop-blur-sm"></div>
          <img 
            src={Image} 
            alt="Tech event" 
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Join our tech community</h3>
            <p>Access exclusive tech events, networking opportunities, and resources.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
