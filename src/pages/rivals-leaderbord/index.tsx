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
            <th className="leadrboard-head_name">Название</th>
            <th>Игр</th>
            <th>Баллов</th>
          </tr>
        </thead>
        <tbody className="leadrboard-body">
          {table === undefined ? (
            <tr>
              <td>{load}</td>
            </tr>
          ) : null}

          {table?.map((v) => (
            <Row key={v[0]} data={v}></Row>
          ))}
        </tbody>
      </table>
    </div>
  );
};
