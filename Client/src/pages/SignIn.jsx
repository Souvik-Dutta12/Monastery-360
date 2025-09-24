import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'



const SignInPage = () => {
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
            <p className="text-red-800 prata">Sign in to your account</p>
          </div>

          {/* Clerk SignIn Component */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-1 lg:p-6 border border-red-200 shadow-lg">
            <SignIn  
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
                  identityPreviewEditButton: 'text-red-800 hover:text-red-900'
                }
              }
              
            }
              redirectUrl="/dashboard"
              signUpUrl="/sign-up"
              forceRedirectUrl="/dashboard"
              
            />
          </div>

          {/* Additional links */}
          <div className="text-center mt-6">
            <p className="text-red-800">
              Don't have an account?{' '}
              <Link to="/sign-up" className="text-red-900 hover:text-red-700 font-semibold">
                Sign up here
              </Link>
            </p>
            <Link to="/" className="text-red-800 hover:text-red-700 text-sm mt-2 inline-block">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
