"use client"
import React, { useState } from 'react';

interface AccountDeletionProps {
  onDeleteAccount?: (username: string) => void;
}

const AccountDeletion: React.FC<AccountDeletionProps> = ({ onDeleteAccount }) => {
  const [username, setUsername] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'initial' | 'otp' | 'confirm'>('initial');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setIsOtpSent(true);
      setStep('otp');
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      setStep('confirm');
    }
  };

  const handleConfirmDelete = () => {
    if (onDeleteAccount) {
      onDeleteAccount(username);
    }
    console.log('Account deleted for username:', username);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-lg w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0095DA] to-[#33A8E0] px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">Account Management</h1>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-8">
            {step === 'initial' && (
              <>
                <h2 className="text-xl font-bold text-[#1A2A3A] mb-3">Delete your account.</h2>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                  <p className="text-[#1A2A3A]/80 text-sm">
                    We're sorry to see you go. This action is permanent and cannot be undone. 
                    All your ride history and personal data will be removed.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-[#1A2A3A] mb-2">Delete Account</h3>
                  <p className="text-[#1A2A3A]/70 text-sm mb-4">Remove your account</p>
                  
                  <form onSubmit={handleSendOtp}>
                    <div className="mb-4">
                      <label htmlFor="username" className="block text-sm font-medium text-[#1A2A3A] mb-1.5">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0095DA] focus:border-transparent outline-none transition-all text-[#1A2A3A] placeholder-gray-400"
                        required
                      />
                      <p className="text-xs text-[#1A2A3A]/60 mt-1.5">
                        We will send a one-time password to verify your identity.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0095DA] hover:bg-[#33A8E0] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-[#0095DA]/50"
                    >
                      Send OTP
                    </button>
                  </form>
                </div>
              </>
            )}

            {step === 'otp' && (
              <>
                <h2 className="text-xl font-bold text-[#1A2A3A] mb-3">Verify Your Identity</h2>
                <div className="bg-[#E8F4FC] border border-[#0095DA]/20 p-4 mb-6 rounded-lg">
                  <p className="text-[#1A2A3A]/80 text-sm">
                    We've sent a one-time password to verify your identity.
                    Please enter the 6-digit code below.
                  </p>
                </div>

                <form onSubmit={handleVerifyOtp}>
                  <div className="mb-6">
                    <label htmlFor="otp" className="block text-sm font-medium text-[#1A2A3A] mb-1.5">
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="Enter 6-digit OTP"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0095DA] focus:border-transparent outline-none transition-all text-[#1A2A3A] placeholder-gray-400 text-center text-2xl tracking-widest"
                      maxLength={6}
                      required
                    />
                    <p className="text-xs text-[#0095DA] mt-1.5">
                      OTP sent to your registered email/phone
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0095DA] hover:bg-[#33A8E0] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-[#0095DA]/50"
                  >
                    Verify OTP
                  </button>
                </form>
              </>
            )}

            {step === 'confirm' && (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#1A2A3A]">Confirm Account Deletion</h2>
                    <p className="text-[#1A2A3A]/70 text-sm">This action is irreversible</p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 p-4 mb-6 rounded-lg">
                  <p className="text-red-700 text-sm font-medium">
                    ⚠️ Are you sure you want to permanently delete your account?
                  </p>
                  <p className="text-red-600/80 text-sm mt-1">
                    Username: <span className="font-semibold">{username}</span>
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep('otp')}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-[#1A2A3A] font-semibold py-3 px-4 rounded-lg transition-all duration-200"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleConfirmDelete}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-red-500/50"
                  >
                    Delete Account
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDeletion;