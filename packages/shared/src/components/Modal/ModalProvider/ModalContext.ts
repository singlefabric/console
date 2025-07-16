import { createContext, useContext } from 'react';
import { ModalFuncProps } from '../Modal';

export interface IModalContext {
  open(config: ModalFuncProps, type?: string): string;
  close(id: string): void;
  confirm(config: ModalFuncProps): string;
}

const noop = () => {};

export const ModalContext = createContext<IModalContext>({
  open: () => '',
  close: noop,
  confirm: () => '',
});

export const useModal = (): IModalContext => useContext<IModalContext>(ModalContext);
