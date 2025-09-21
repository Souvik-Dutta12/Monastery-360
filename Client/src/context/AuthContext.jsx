import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const { user, isLoaded } = useUser();
  const [userRole, setUserRole] = useState(null);
  const [isLoadingRole, setIsLoadingRole] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (isLoaded && user) {
        try {
          // Get the role from user metadata
          const role = user.publicMetadata.role || 'traveler'; // Default to traveler if no role is set
          setUserRole(role);
        } catch (error) {
          console.error('Error fetching user role:', error);
          setUserRole('traveler'); // Default to traveler on error
        } finally {
          setIsLoadingRole(false);
        }
      } else if (isLoaded && !user) {
        setUserRole(null);
        setIsLoadingRole(false);
      }
    };

    fetchUserRole();
  }, [user, isLoaded]);

  // Values to be provided to consumers
  const value = {
    userRole,
    isLoadingRole,
    isAuthenticated: !!user,
    user,
    isResearcher: userRole === 'researcher',
    isTraveler: userRole === 'traveler',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};