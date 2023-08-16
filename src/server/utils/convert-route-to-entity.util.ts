const mapping: Record<string, string> = {
  children: 'child',
  comments: 'comment',
  parents: 'parent',
  places: 'place',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
