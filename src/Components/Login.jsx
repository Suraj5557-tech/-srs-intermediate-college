import React, { useState } from 'react';
import logoImg from '../assets/logo.jpg';

const Login = () => {
  // Login Role State (default: 'student')
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'admin') {
      alert(`Logging in as ADMIN with email: ${email}`);
      // Yahan Admin Dashboard par redirect karenge baad me
    } else {
      alert(`Logging in as STUDENT/PARENT with email: ${email}`);
      // Yahan Student Portal par redirect karenge
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
        
        {/* Header / Logo */}
        <div className="text-center mb-6">
          <img src={logoImg} alt="Logo" className="w-16 h-16 mx-auto rounded-full border-2 border-yellow-400 bg-white object-contain mb-2" />
          <h2 className="text-xl font-bold text-blue-900">स्व० सीताराम सिंह सेवा शिक्षण संस्थान</h2>
          <p className="text-xs text-gray-500 mt-1">Portal Authentication Portal</p>
        </div>

        {/* Role Switcher Tabs (Normal vs Admin) */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-6 border">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              role === 'student'
                ? 'bg-blue-900 text-white shadow-md'
                : 'text-gray-600 hover:text-blue-900'
            }`}
          >
            <i className="fa-solid fa-user-graduate mr-1"></i> Student / Parent
          </button>
          <button
            type="button"
            onClick={() => setRole('admin')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              role === 'admin'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-gray-600 hover:text-red-600'
            }`}
          >
            <i className="fa-solid fa-user-shield mr-1"></i> College Admin
          </button>
        </div>

        {/* Dynamic Badge */}
        <div className="mb-4 text-center">
          <span className={`text-xs px-3 py-1 rounded-full font-bold ${
            role === 'admin' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-900'
          }`}>
            {role === 'admin' ? '🔒 Admin Access Mode' : '🎓 Student Portal Access'}
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              {role === 'admin' ? 'Admin ID / Email' : 'Student ID / Mobile Number'}
            </label>
            <input
              type="text"
              placeholder={role === 'admin' ? 'admin@college.com' : 'Enter ID / Mobile'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none text-sm"
              required
            />
          </div>

          {role === 'admin' && (
            <div className="text-right">
              <a href="#forgot" className="text-xs text-red-600 hover:underline">Forgot Admin Key?</a>
            </div>
          )}

          <button
            type="submit"
            className={`w-full font-bold py-3 rounded-lg transition shadow-md text-white text-sm ${
              role === 'admin' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-900 hover:bg-blue-800'
            }`}
          >
            Login to {role === 'admin' ? 'Admin Panel' : 'Student Portal'}
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          <a href="/" className="text-blue-900 font-semibold hover:underline flex items-center justify-center gap-1">
            <i className="fa-solid fa-arrow-left"></i> Back to Main Website
          </a>
        </div>

      </div>
    </div>
  );
};

export default Login;