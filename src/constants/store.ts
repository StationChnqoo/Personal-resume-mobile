import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';

import {MMKV} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';
import {colors as _colors} from './c';

const mmkv = new MMKV({
  id: 'useMMKV',
  encryptionKey: 'net.cctv3.i',
});
const mmkvStorage: StateStorage = {
  setItem: (key, value) => mmkv.set(key, value),
  getItem: key => mmkv.getString(key) || null,
  removeItem: key => mmkv.delete(key),
};

interface States {
  colors: any[];
  setColors: (c: any[]) => void;
  theme: string;
  setTheme: (s: string) => void;
}

const initialState = {
  colors: [..._colors],
  theme: '#4c221b',
};

const useCaches = create<States>()(
  devtools(
    persist(
      set => ({
        ...initialState,
        setTheme: theme => set({theme}),
        setColors: colors => set({colors}),
      }),
      {
        storage: createJSONStorage(() => mmkvStorage),
        name: 'useCaches.ts',
        /** 白名单 */
        partialize: state => ({}),
      },
    ),
  ),
);

export {useCaches};
