import { useEffect, useState } from 'react';
import { HomePage } from './features/home/HomePage';
import { RouterView } from './features/site/RouterView';
import { SiteLayout } from './features/site/SiteLayout';
import { getRouteFromHash, type RouteId } from './features/site/routes';

function App() {
  const [route, setRoute] = useState<RouteId>(() => getRouteFromHash(window.location.hash));

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (route === 'home') {
    return <HomePage />;
  }

  return (
    <SiteLayout activeRoute={route}>
      <RouterView route={route} />
    </SiteLayout>
  );
}

export default App;
