import axios from 'axios';
import toast from 'react-hot-toast';
import { create } from 'zustand';

const API_URL = import.meta.env.VITE_API_URL;

const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,
  isLoggingIn: false,

  authStatus: async () => {
    try {
      const response = await axios.get(`${API_URL}/api/auth/status`, { withCredentials: true });
      set({ authUser: response.data });

    } catch (error) {
      console.log('Error in authStatus:', error);
      set({ authUser: null });

    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (userCredentials) => {
    set({ isSigningUp: true });

    try {
      const response = await axios.post(`${API_URL}/api/auth/register`, userCredentials, { withCredentials: true });
      set({ authUser: response.data });
      toast.success('Account created successfully');

    } catch (error) {
      console.log('Error in signup:', error);
      toast.error(error.response.data.message);

    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (userCredentials) => {
    set({ isLoggingIn: true });

    try {
      const response = await axios.post(`${API_URL}/api/auth/login`, userCredentials, { withCredentials: true });
      set({ authUser: response.data });
      toast.success('Logged in');

    } catch (error) {
      console.log('Error in login:', error);
      toast.error(error.response.data.message);

    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axios.post(`${API_URL}/api/auth/logout`, {}, { withCredentials: true });
      set({ authUser: null });
      toast.success('Logged out');

    } catch (error) {
      console.log('Error in logout:', error);
      toast.error(error.response.data.message);
    }
  }
}));

export default useAuthStore;