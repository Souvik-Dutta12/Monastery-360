import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser, useClerk } from '@clerk/clerk-react';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const { user, isLoaded } = useUser();
  const { user: clerkUser } = useClerk();
  const [userRole, setUserRole] = useState(null);
  const [isLoadingRole, setIsLoadingRole] = useState(true);

  useEffect(() => {
    const fetchAndUpdateUserRole = async () => {
      if (isLoaded && user) {
        try {
          // Check if there's a role in localStorage (from signup)
          const storedRole = localStorage.getItem('userRole');
          
          // If we have a stored role and it's not in metadata yet, update it
          if (storedRole && (!user.publicMetadata?.role || user.publicMetadata.role !== storedRole)) {
            console.log('Updating user metadata with role:', storedRole);
            
            // Update the user's metadata with the role
            await clerkUser.update({
              publicMetadata: { role: storedRole }
            });
            
            // Clear the localStorage after updating
            localStorage.removeItem('userRole');
            
            // Set the role state
            setUserRole(storedRole);
          } else {
            // Get the role from user metadata or default to traveler
            const role = user.publicMetadata?.role || 'traveler';
            setUserRole(role);
          }
        } catch (error) {
          console.error('Error handling user role:', error);
          setUserRole('traveler'); // Default to traveler on error
        } finally {
          setIsLoadingRole(false);
        }
      } else if (isLoaded && !user) {
        setUserRole(null);
        setIsLoadingRole(false);
      }
    };

    fetchAndUpdateUserRole();
  }, [user, isLoaded, clerkUser]);

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