export const navLinks = [
  { id: 'home', href: '#/', label: 'Home' },
  { id: 'flavors', href: '#/flavors', label: 'Flavors' },
  { id: 'experience', href: '#/experience', label: 'Experience' },
  { id: 'reviews', href: '#/reviews', label: 'Reviews' },
  { id: 'journal', href: '#/journal', label: 'Journal' },
  { id: 'contact', href: '#/contact', label: 'Contact' },
] as const;

export type RouteId = (typeof navLinks)[number]['id'];

const routeIds = new Set<RouteId>(navLinks.map((link) => link.id));

export function getRouteFromHash(hash: string): RouteId {
  if (!hash || hash === '#' || hash === '#/' || hash === '#home' || hash === '#/home') {
    return 'home';
  }

  const normalized = hash.startsWith('#/') ? hash.slice(2) : hash.slice(1);
  const route = normalized.split('/')[0] as RouteId;

  if (routeIds.has(route)) {
    return route;
  }

  return 'home';
}
