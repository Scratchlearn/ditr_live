import React, { useState } from "react";

const AuthModal = ({ close }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleSendOtp = () => {
    const otpCode = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otpCode);
    alert(`OTP sent: ${otpCode} (for demo)`);
  };

  const handleSubmit = () => {
    if (otp === generatedOtp) {
      alert(isLogin ? "Login successful!" : "Registered successfully!");
      localStorage.setItem("user", email);
      close();
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-11/12 sm:w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">
          {isLogin ? "Login" : "Register"}
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <button onClick={handleSendOtp} className="w-full bg-indigo-600 text-white py-2 rounded mb-3">
          Send OTP
        </button>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <button onClick={handleSubmit} className="w-full bg-green-600 text-white py-2 rounded mb-3">
          {isLogin ? "Login" : "Register"}
        </button>
        <p className="text-sm text-center">
          {isLogin ? "Not registered?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)} className="text-indigo-600 cursor-pointer">
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
        <button onClick={close} className="mt-4 w-full bg-gray-300 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
