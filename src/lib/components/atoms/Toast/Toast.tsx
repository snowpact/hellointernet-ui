import classNames from 'classnames';
import type { FC } from 'react';
import { useState } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import type { Duration } from './ToastContext';
import { ToastContext } from './ToastContext';

export interface ToastProps {
  children?: React.ReactNode;
  duration?: Duration;
}

const durationClasses: Record<Duration, string> = {
  75: 'duration-75',
  100: 'duration-100',
  150: 'duration-150',
  200: 'duration-200',
  300: 'duration-300',
  500: 'duration-500',
  700: 'duration-700',
  1000: 'duration-1000'
};

export const Toast: FC<ToastProps> = ({ children, duration = 300 }) => {
  const [isClosed, setIsClosed] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const theme = useTheme().theme.toast;

  return (
    <ToastContext.Provider value={{ duration, isClosed, isRemoved, setIsClosed, setIsRemoved }}>
      <div
        data-testid="sui-toast"
        className={classNames(
          'flex w-full max-w-xs items-center p-4',
          theme.base,
          durationClasses[duration],
          isClosed && 'opacity-0 ease-out',
          isRemoved && 'hidden'
        )}
      >
        {children}
      </div>
    </ToastContext.Provider>
  );
};
