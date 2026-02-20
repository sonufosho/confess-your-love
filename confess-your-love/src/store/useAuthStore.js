import axios from 'axios';
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSigningUp: false,

  authStatus: async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/auth/status', { withCredentials: true });
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
      const response = await axios.post('http://localhost:3000/api/auth/register', userCredentials, { withCredentials: true });
      set({ authUser: response.data });

    } catch (error) {
      console.log('Error in signup:', error);

    } finally {
      set({ isSigningUp: false });
    }
  }
}));

export default useAuthStore;