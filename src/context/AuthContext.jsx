// src/context/AuthContext.jsx
import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';

// Initial state
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: true,
  error: null
};

// Action types
export const AUTH_ACTIONS = {
  SET_LOADING: 'SET_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  LOGOUT: 'LOGOUT',
  CLEAR_ERROR: 'CLEAR_ERROR',
  RESTORE_SESSION: 'RESTORE_SESSION'
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case AUTH_ACTIONS.LOGIN_SUCCESS:
    case AUTH_ACTIONS.REGISTER_SUCCESS:
    case AUTH_ACTIONS.RESTORE_SESSION:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        error: null
      };

    case AUTH_ACTIONS.LOGIN_FAILURE:
    case AUTH_ACTIONS.REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload
      };

    case AUTH_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null
      };

    case AUTH_ACTIONS.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

// Create context
const AuthContext = createContext(null);

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Storage keys
  const STORAGE_KEYS = {
    TOKEN: 'logitrack_token',
    USER: 'logitrack_user'
  };

  // Utility functions
  const saveToStorage = useCallback((token, user) => {
    try {
      localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, [STORAGE_KEYS.TOKEN, STORAGE_KEYS.USER]);

  const clearStorage = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEYS.TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER);
    } catch (error) {
      console.error('Failed to clear localStorage:', error);
    }
  }, [STORAGE_KEYS.TOKEN, STORAGE_KEYS.USER]);

  const getStoredAuth = useCallback(() => {
    try {
      const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
      const userJson = localStorage.getItem(STORAGE_KEYS.USER);
      
      if (token && userJson) {
        const user = JSON.parse(userJson);
        return { token, user };
      }
    } catch (error) {
      console.error('Failed to retrieve from localStorage:', error);
      clearStorage();
    }
    return null;
  }, [STORAGE_KEYS.TOKEN, STORAGE_KEYS.USER, clearStorage]);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      const storedAuth = getStoredAuth();
      
      if (storedAuth) {
        dispatch({
          type: AUTH_ACTIONS.RESTORE_SESSION,
          payload: storedAuth
        });
      } else {
        dispatch({
          type: AUTH_ACTIONS.SET_LOADING,
          payload: false
        });
      }
    };

    initializeAuth();
  }, [getStoredAuth]); // Safe dependency

  // Login function
  const login = useCallback(async (credentials) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });

    try {
      // Mock API call - replace with actual API
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            data: {
              user: {
                id: Date.now().toString(),
                email: credentials.email,
                firstName: credentials.email.split('@')[0].charAt(0).toUpperCase() + credentials.email.split('@')[0].slice(1),
                lastName: 'User',
                company: 'Demo Company',
                role: 'service_provider'
              },
              token: `jwt_token_${Date.now()}`
            }
          });
        }, 1000);
      });

      if (response.success) {
        const { user, token } = response.data;
        
        // Save to localStorage
        saveToStorage(token, user);
        
        // Update state
        dispatch({
          type: AUTH_ACTIONS.LOGIN_SUCCESS,
          payload: { user, token }
        });

        return response.data;
      }
    } catch (error) {
      const errorMessage = error.message || 'Login failed. Please try again.';
      dispatch({
        type: AUTH_ACTIONS.LOGIN_FAILURE,
        payload: errorMessage
      });
      throw new Error(errorMessage);
    }
  }, [saveToStorage]);

  // Register function
  const register = useCallback(async (userData) => {
    dispatch({ type: AUTH_ACTIONS.SET_LOADING, payload: true });

    try {
      // Mock API call - replace with actual API
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            data: {
              user: {
                id: Date.now().toString(),
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                company: userData.companyName,
                role: userData.role
              },
              token: `jwt_token_${Date.now()}`
            }
          });
        }, 1500);
      });

      if (response.success) {
        const { user, token } = response.data;
        
        // Save to localStorage
        saveToStorage(token, user);
        
        // Update state
        dispatch({
          type: AUTH_ACTIONS.REGISTER_SUCCESS,
          payload: { user, token }
        });

        return response.data;
      }
    } catch (error) {
      const errorMessage = error.message || 'Registration failed. Please try again.';
      dispatch({
        type: AUTH_ACTIONS.REGISTER_FAILURE,
        payload: errorMessage
      });
      throw new Error(errorMessage);
    }
  }, [saveToStorage]);

  // Logout function
  const logout = useCallback(() => {
    clearStorage();
    dispatch({ type: AUTH_ACTIONS.LOGOUT });
  }, [clearStorage]);

  // Clear error function
  const clearError = useCallback(() => {
    dispatch({ type: AUTH_ACTIONS.CLEAR_ERROR });
  }, []);

  // Check if user is authenticated
  const isUserAuthenticated = useCallback(() => {
    return Boolean(state.token && state.user);
  }, [state.token, state.user]);

  // Get user info
  const getCurrentUser = useCallback(() => {
    return state.user;
  }, [state.user]);

  // Context value
  const contextValue = {
    // State
    user: state.user,
    token: state.token,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    error: state.error,
    
    // Actions
    login,
    register,
    logout,
    clearError,
    
    // Utilities
    isUserAuthenticated,
    getCurrentUser
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

// HOC for components that require authentication
export const withAuth = (Component) => {
  return (props) => {
    const { isAuthenticated, loading } = useAuth();
    
    if (loading) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-800 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      );
    }
    
    if (!isAuthenticated) {
      return <div>Access denied. Please log in.</div>;
    }
    
    return <Component {...props} />;
  };
};

export default AuthContext;
