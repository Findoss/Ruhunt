import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import { RUHUNT_FORM_RIVALS_REG, RUHUNT_LEADERBORD } from 'constants/index';

import MarkdownFile from 'assets/data/rivals.md';
import './style.css';

export const TurPage = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(MarkdownFile)
      .then((response) => response.text())
      .then((text) => {
        setText(() => text);
      });
  }, []);

  const styleLinkReg = cn('ruhunt-link-form-rivals', {
    'disable-links': !RUHUNT_FORM_RIVALS_REG,
  });

  const styleLinkBoard = cn('ruhunt-link-form-rivals', {
    'disable-links': !RUHUNT_LEADERBORD,
  });

  return (
    <div className="rivals-content">
      <a
        href={RUHUNT_FORM_RIVALS_REG}
        className={styleLinkReg}
        target="_blank"
        rel="noopener noreferrer"
      >
        Подать заявку на участие
      </a>
      <NavLink to="/rivals/leaderboard" className={styleLinkBoard}>
        Таблица лидеров
      </NavLink>
      <ReactMarkdown className="md" children={text} />
    </div>
  );
};
