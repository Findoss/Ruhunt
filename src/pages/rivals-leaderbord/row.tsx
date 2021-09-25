import './style.css';

type Props = {
  data: string[];
  index: number;
};

export const Row = ({ data, index }: Props) => {
  return (
    <tr className="leadrboard-row">
      <td className="leadrboard-col leadrboard-col_num">{index}</td>
      <td className="leadrboard-col leadrboard-col_name">
        <a href={data[5]} target="_blank" rel="noopener noreferrer">
          {data[1]}
        </a>
        <br />
        <span className="leadrboard-col_players">{data[4]}</span>
      </td>
      <td className="leadrboard-col leadrboard-col_point">{data[3]}</td>
      <td className="leadrboard-col leadrboard-col_point">{data[2]}</td>
    </tr>
  );
};
