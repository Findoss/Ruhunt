import { HashRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import cn from 'classnames';

import { routes, specialRoutes } from 'router/routes';

import './App.css';

function App() {
  const allRoutes = [...specialRoutes, ...routes];

  return (
    <div className="app">
      <header className="app_header">
        <Router>
          <ul className="app_menu menu">
            {routes
              .sort((a, b) => a.id - b.id)
              .map(({ id, isExact, link, className, text }) => (
                <li key={id} className={cn('menu_item', className)}>
                  <NavLink exact={isExact} to={link}>
                    {text}
                  </NavLink>
                </li>
              ))}
          </ul>
        </Router>
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
        © {new Date(Date.now()).getFullYear()} RUHUNT{' '}
      </div>
    </div>
  );
}

export default App;
