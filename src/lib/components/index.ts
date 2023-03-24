export * from './atoms';
export * from './atoms/Badge';
export * from './bosons';
export * from './Carousel';
export * from './Dropdown';
export * from './Footer';
export * from './molecules';
export * from './molecules/Accordion';
export * from './molecules/ButtonGroup';
export * from './molecules/Card';
export * from './Navbar';
export * from './Pagination';
export * from './Rating';
export * from './Sidebar';
export * from './Spinner';
export * from './Table';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
