type Route = `/${string}`;

type NavItem = {
  label: string;
  href: Route;
};

export type MainNav = Array<NavItem>;
