import { RUHUNT_DISCORD } from 'constants/index';
import { Streamers } from 'components/streamers';

import logo from 'assets/images/rhnt_white.png';
import './style.css';

export const MainPage = () => {
  return (
    <div className="main">
      <a
        href={RUHUNT_DISCORD}
        target="_blank"
        rel="noopener noreferrer"
        className="ruhunt-link"
      >
        <img src={logo} alt="ruhunt-logo" className="ruhunt-logo" />
        <div className="ruhunt-text">discord link</div>
      </a>
      <Streamers />
    </div>
  );
};
