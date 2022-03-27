import { atom } from "recoil";
  interface LayoutInterface {
    height: number;
    width: number;
    x: number;
    y: number;
  }

export const layoutState = atom<any | null>({
    key: 'LayoutState',
    default: null,
  });