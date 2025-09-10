import React from 'react'
import { useAuth } from '@clerk/clerk-react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth()

  // Show loading while Clerk is initializing
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0D244B] to-[#1a3a5c] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-200 mx-auto mb-4"></div>
          <p className="text-amber-100 prata text-lg">Loading...</p>
        </div>
      </div>
    )
  }

  // Redirect to sign-in if not authenticated
  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />
  }

  // Render the protected component if authenticated
  return children
}

export default ProtectedRoute
