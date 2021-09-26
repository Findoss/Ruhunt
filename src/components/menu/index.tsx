import { HashRouter as Router, NavLink } from 'react-router-dom';
import cn from 'classnames';

import { routes } from 'router/routes';

export const Menu = () => {
  return (
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
  );
};
