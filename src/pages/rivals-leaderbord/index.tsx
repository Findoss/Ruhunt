import { useEffect, useState } from 'react';
import './style.css';

import { RUHUNT_LEADERBORD } from '../../constants/index';
import { csvToArray } from '../../utils/csvToArray';

import { Row } from './row';

export const RivalsLeaderboardPage = () => {
  const [table, setTable] = useState<string[][]>();
  const [load, setLoad] = useState<string>('Загрузка результатов...');

  useEffect(() => {
    fetch(RUHUNT_LEADERBORD)
      .then((raw) => {
        return raw.text();
      })
      .then((text: any) => {
        const arr = csvToArray(text)
          .filter((v) => v[1] !== '')
          .sort((a, b) => Number(b[2]) - Number(a[2]));

        setTable(() => arr);
        setLoad('');
      })
      .catch((err) => {
        console.log(err);
        setLoad('Ошибка загрузки результатов. Попробуйте позже');
      });
  }, []);

  return (
    <div className="rivals-content">
      <h1>Таблица лидеров</h1>
      <table className="leadrboard">
        <thead className="leadrboard-head">
          <tr>
            <th className="leadrboard-head_num">#</th>
            <th className="leadrboard-head_name">Название команды</th>
            <th>Игр</th>
            <th>Очки</th>
          </tr>
        </thead>
        <tbody className="leadrboard-body">
          {table === undefined ? (
            <tr>
              <td>{load}</td>
            </tr>
          ) : null}

          {table?.map((v, i) => (
            <Row key={v[0]} data={v} index={i}></Row>
          ))}
        </tbody>
      </table>
    </div>
  );
};
