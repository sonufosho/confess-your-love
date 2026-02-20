import axios from 'axios';
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,

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
  }
}));

export default useAuthStore;