# Clerk Authentication Setup Instructions

## Environment Variables Setup

1. **Create a `.env` file** in your project root directory (same level as `package.json`)

2. **Get your Clerk Publishable Key:**
   - Go to [https://dashboard.clerk.com/](https://dashboard.clerk.com/)
   - Sign up or log in to your Clerk account
   - Create a new application or select an existing one
   - Copy the "Publishable Key" from the API Keys section

3. **Add the key to your `.env` file:**
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_actual_publishable_key_here
   ```

4. **Restart your development server** after adding the environment variable:
   ```bash
   npm run dev
   ```

## Authentication Flow

The application now includes:

- **Sign In Page** (`/sign-in`) - Users can sign in with email/password or social providers
- **Sign Up Page** (`/sign-up`) - New users can create accounts
- **Protected Dashboard** (`/dashboard`) - Only accessible after authentication
- **Home Page** (`/`) - Updated with Sign In/Sign Up buttons
- **Automatic Redirects** - Unauthenticated users are redirected to sign-in

## Features

- ✅ Clerk authentication integration
- ✅ Protected routes with loading states
- ✅ Custom styled authentication pages matching your theme
- ✅ Proper sign-out functionality in dashboard sidebar
- ✅ Responsive design with your Monastery 360 branding

## Testing the Flow

1. Start your development server: `npm run dev`
2. Visit `http://localhost:5173`
3. Click "Sign Up" to create a new account
4. After signing up, you'll be redirected to the dashboard
5. Use the "Log out" button in the sidebar to sign out
6. Try accessing `/dashboard` directly - you'll be redirected to sign-in

## Customization

You can customize the authentication pages by modifying:
- `src/pages/SignIn.jsx` - Sign in page styling and behavior
- `src/pages/SignUp.jsx` - Sign up page styling and behavior
- `src/components/ProtectedRoute.jsx` - Loading state and redirect behavior
