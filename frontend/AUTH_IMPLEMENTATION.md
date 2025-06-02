# Authentication Implementation

This document outlines the authentication implementation using API, Services, and Hooks pattern.

## 📁 Folder Structure

```
api/
├── client.ts              # HTTP client with auth headers
├── endpoints.ts           # API endpoint constants  
├── auth/
│   └── auth.api.ts        # Auth API calls
└── index.ts              # API exports

services/
├── auth/
│   ├── auth.service.ts    # Business logic layer
│   └── token.service.ts   # Token management
└── index.ts              # Services exports

hooks/
├── useAuth.ts            # Main auth hook
├── useAuthForm.ts        # Form validation hook
└── useFrameworkReady.ts  # (existing)

lib/
├── store/
│   └── auth-store.ts     # Zustand state management
├── constants/
│   └── storage-keys.ts   # Storage key constants
└── utils/
    ├── form-validation.ts     # Form validation logic
    ├── error-handler.ts  # Error handling utilities
    └── index.ts         # Utils exports
```

## 🔄 Architecture Flow

1. **Component** → calls `useAuth` hook
2. **Hook** → calls `AuthService` methods 
3. **Service** → calls `authApi` functions + manages tokens
4. **API** → makes HTTP requests via `apiClient`
5. **Store** → manages global auth state

## 🚀 Usage Examples

### In Sign-in Component
```tsx
import { useAuth } from '@/hooks/useAuth';
import { useAuthForm } from '@/hooks/useAuthForm';

export default function SignInScreen() {
  const { signIn, isLoading, error } = useAuth();
  const { getFieldProps, validateForm } = useAuthForm({ type: 'signin' });
  
  const handleSignIn = async () => {
    const validation = validateForm();
    if (!validation.isValid) return;
    
    const emailProps = getFieldProps('email');
    const passwordProps = getFieldProps('password');
    
    await signIn({
      email: emailProps.value,
      password: passwordProps.value,
    });
  };
  
  // ... rest of component
}
```

### In Profile Component  
```tsx
import { useAuth } from '@/hooks/useAuth';

export default function ProfileScreen() {
  const { user, logout, refreshUser } = useAuth();
  
  const handleLogout = async () => {
    await logout(); // Will navigate to auth screen
  };
  
  // ... rest of component
}
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in your project root:
```env
EXPO_PUBLIC_API_URL=http://localhost:3000/api
```

### Backend API Expected Structure
Your backend should have these endpoints:
- `POST /auth/signin` - Sign in with email/password
- `POST /auth/signup` - Sign up with name/email/password  
- `POST /auth/refresh` - Refresh auth token
- `GET /auth/me` - Get current user profile
- `POST /auth/logout` - Logout user

### Expected Response Format
```json
{
  "data": {
    "user": {
      "id": "user_id",
      "name": "User Name", 
      "email": "user@example.com"
    },
    "token": "jwt_token_here",
    "refreshToken": "refresh_token_here"
  },
  "success": true,
  "message": "Success message"
}
```

## 🛡️ Security Features

- **Token Management**: Secure storage with AsyncStorage
- **Auto Refresh**: Automatic token refresh on expiry
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Form Validation**: Client-side validation with real-time feedback
- **State Management**: Global auth state with Zustand

## 📋 Features Included

- ✅ Sign in/Sign up with validation
- ✅ Token storage and refresh
- ✅ Global auth state management
- ✅ Error handling with user feedback
- ✅ Form validation with real-time errors
- ✅ Loading states
- ✅ Auto navigation after auth actions
- ✅ Logout functionality
- ✅ TypeScript support

## 🎯 Next Steps

1. **Test the implementation** with your backend
2. **Add Google Auth** integration if needed
3. **Add biometric authentication** for enhanced security
4. **Implement password reset** functionality
5. **Add user profile management** features
