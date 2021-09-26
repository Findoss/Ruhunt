import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Menu } from 'components/menu';
import { Footer } from 'components/footer';
import { routes, specialRoutes } from 'router/routes';

import './App.css';

function App() {
  const allRoutes = [...specialRoutes, ...routes];

  return (
    <div className="app">
      <header className="app_header">
        <Menu />
      </header>
      <div className="app_content">
        <Router>
          <Switch>
            {allRoutes.map(({ id, isExact, link, component }) => (
              <Route
                key={id}
                exact={isExact}
                path={link}
                component={component}
              />
            ))}
          </Switch>
        </Router>
      </div>
      <div className="app_footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
