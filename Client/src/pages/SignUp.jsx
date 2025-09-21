import React, { useState } from 'react'
import { SignUp } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'



const SignUpPage = () => {
  const [selectedRole, setSelectedRole] = useState('traveler');
  const [showClerkForm, setShowClerkForm] = useState(false);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setShowClerkForm(true);
  };

  const handleSignUpComplete = async (user) => {
    try {
      // Store the user role in Clerk metadata
      await user.update({
        publicMetadata: {
          role: selectedRole
        }
      });
    } catch (error) {
      console.error("Error setting user role:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5E0] relative">


      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Logo and branding */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4 ">
              <img src='/Logo.png' alt="Monastery 360" className="h-20" />
              <div className="text-red-900">
                <h1 className="text-4xl font-bold text-red-800 prata">Monastery 360</h1>
                <p className="text-xl text-red-700 prata">Sikkim Heritage</p>
              </div>
            </div>
            <p className="text-red-800 prata">Create your account to explore Sikkim's heritage</p>
          </div>

          {/* Role Selection */}
          {!showClerkForm ? (
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 border border-red-200 shadow-lg">
              <h2 className="text-2xl font-bold text-red-800 prata mb-4 text-center">Choose your role</h2>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button
                  onClick={() => handleRoleSelect('researcher')}
                  className={`p-4 rounded-lg border-2 transition-all ${selectedRole === 'researcher'
                      ? 'border-red-800 bg-red-50'
                      : 'border-red-200 hover:border-red-400'
                    }`}
                >
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-800 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span className="text-lg font-medium text-red-800">Researcher</span>
                    <p className="text-sm text-red-700 mt-1 text-center">Study and document heritage sites</p>
                  </div>
                </button>

                <button
                  onClick={() => handleRoleSelect('traveler')}
                  className={`p-4 rounded-lg border-2 transition-all ${selectedRole === 'traveler'
                      ? 'border-red-800 bg-red-50'
                      : 'border-red-200 hover:border-red-400'
                    }`}
                >
                  <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-800 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-lg font-medium text-red-800">Traveler</span>
                    <p className="text-sm text-red-700 mt-1 text-center">Explore and visit heritage sites</p>
                  </div>
                </button>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowClerkForm(true)}
                  className="bg-red-900 hover:bg-red-800 text-amber-100 py-2 px-6 rounded-md font-medium transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          ) : (
            /* Clerk SignUp Component */
            <>
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-1 lg:p-6 border border-red-200 shadow-lg">
                <div className="mb-4 text-center">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                    Signing up as: {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
                  </span>
                  <button
                    onClick={() => setShowClerkForm(false)}
                    className="ml-2 text-red-700 hover:text-red-900 text-sm underline"
                  >
                    Change
                  </button>
                </div>

                <SignUp
                  appearance={{
                    elements: {
                      formButtonPrimary: 'bg-red-900 hover:bg-red-800 text-amber-100 border-0',
                      card: 'bg-transparent shadow-none',
                      headerTitle: 'text-red-900 prata',
                      headerSubtitle: 'text-red-700',
                      socialButtonsBlockButton: 'bg-red-50 hover:bg-red-100 text-red-900 border-red-200',
                      formFieldInput: 'bg-white border-red-200 text-red-900 placeholder-red-500',
                      formFieldLabel: 'text-red-800',
                      identityPreviewText: 'text-red-900',
                      formResendCodeLink: 'text-red-800 hover:text-red-900',
                      footerActionLink: 'text-red-800 hover:text-red-900',
                      dividerLine: 'bg-red-200',
                      dividerText: 'text-red-700',
                      formFieldErrorText: 'text-red-600',
                      identityPreviewEditButton: 'text-red-800 hover:text-red-900',
                      formFieldSuccessText: 'text-green-700'
                    }
                  }}
                  redirectUrl="/dashboard"
                  signInUrl="/sign-in"
                  forceRedirectUrl="/dashboard"
                  onComplete={handleSignUpComplete}
                />
              </div>

              {/* Additional links */}
              <div className="text-center mt-6">
                <p className="text-red-800">
                  Already have an account?{' '}
                  <Link to="/sign-in" className="text-red-900 hover:text-red-700 font-semibold">
                    Sign in here
                  </Link>
                </p>
                <Link to="/" className="text-red-800 hover:text-red-700 text-sm mt-2 inline-block">
                  ← Back to Home
                </Link>
              </div>
            </>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
