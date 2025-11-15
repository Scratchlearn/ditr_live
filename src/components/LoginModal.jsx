import React, { useState } from "react";
import { auth, setupRecaptcha, signInWithPhoneNumber } from "../firebase";

const LoginModal = ({ close }) => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);

  const sendOtp = async () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Enter valid 10-digit mobile number");
      return;
    }

    const recaptchaVerifier = setupRecaptcha();

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+91${mobile}`,
        recaptchaVerifier
      );
      setConfirmation(confirmationResult);
      alert("OTP Sent Successful ✅");
    } catch (err) {
      alert("Error sending OTP: " + err.message);
    }
  };

  const verifyOtp = async () => {
    try {
      await confirmation.confirm(otp);
      localStorage.setItem("user", JSON.stringify({ mobile }));
      close();
      window.location.reload();
    } catch {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 w-[340px] rounded-xl shadow-lg">

        <h2 className="text-lg font-semibold text-center mb-4">Login / Register</h2>

        {!confirmation ? (
          <>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border w-full px-3 py-2 rounded mb-3"
            />

            <div id="recaptcha-container"></div>

            <button
              onClick={sendOtp}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded transition"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border w-full px-3 py-2 rounded mb-3"
            />

            <button
              onClick={verifyOtp}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
            >
              Verify OTP
            </button>
          </>
        )}

        <button onClick={close} className="block text-center mt-4 text-sm text-gray-500 hover:text-red-500">
          Close
        </button>

      </div>
    </div>
  );
};

export default LoginModal;
