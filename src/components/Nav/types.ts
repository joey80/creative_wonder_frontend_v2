interface NavLinks {
  name: string;
  children?: Array<NavLinks>;
}

interface NavDataTypes {
  [x: string]: Array<NavLinks>;
}

interface NavTypes {
  areLinksVisible: boolean;
  isMenuOpen: boolean;
}

export type { NavDataTypes, NavTypes };
