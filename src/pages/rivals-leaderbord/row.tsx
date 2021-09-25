import './style.css';

type Props = {
  data: string[];
  index: number;
};

export const Row = ({ data, index }: Props) => {
  return (
    <tr className="leadrboard-row">
      <td className="leadrboard-col leadrboard-col_num">{index + 1}</td>
      <td className="leadrboard-col leadrboard-col_name">
        <a href={data[5]} target="_blank" rel="noopener noreferrer">
          <span className="leadrboard-col_team">{data[1]}</span>
          <br />
          <span className="leadrboard-col_players">{data[4]}</span>
        </a>
      </td>
      <td
        dangerouslySetInnerHTML={{ __html: data[6] }}
        className="leadrboard-col leadrboard-col_ban"
      ></td>
      <td className="leadrboard-col leadrboard-col_point">{data[3]}</td>
      <td className="leadrboard-col leadrboard-col_point">
        {Math.round(Number(data[2]))}
      </td>
    </tr>
  );
};
