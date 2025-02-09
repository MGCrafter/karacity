import create from 'zustand';

interface UserState {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  logout: () => set({ token: null }),
}));

export default useUserStore;