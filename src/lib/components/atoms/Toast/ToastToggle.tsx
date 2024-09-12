import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { HiX } from 'react-icons/hi';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { useToastContext } from './ToastContext';

type ToastToggleProps = ComponentProps<'button'> & {
  xIcon?: FC<ComponentProps<'svg'>>;
};

export const ToastToggle: FC<ToastToggleProps> = ({ xIcon: XIcon = HiX }) => {
  const { duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext();
  const theme = useTheme().theme.toast;

  const handleClick = () => {
    setIsClosed(!isClosed);
    setTimeout(() => setIsRemoved(!isRemoved), duration);
  };

  return (
    <button
      aria-label="Close"
      onClick={handleClick}
      type="button"
      className={classNames('-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 p-1.5', theme.toggle)}
    >
      <XIcon className="h-5 w-5 shrink-0" />
    </button>
  );
};
