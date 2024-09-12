export type ToastTheme = {
  base: string;
  toggle: string;
};

export const TOAST_THEME: ToastTheme = {
  base: ' rounded-lg bg-white text-gray-500 shadow',
  toggle:
    'rounded-lg bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300:bg-gray-700:text-white'
};
