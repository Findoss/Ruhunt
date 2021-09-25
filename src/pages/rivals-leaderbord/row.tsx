import './style.css';

type Props = {
  data: string[];
};

export const Row = ({ data }: Props) => {
  return (
    <tr className="leadrboard-row">
      <td className="leadrboard-col leadrboard-col_name">{data[1]}</td>
      <td className="leadrboard-col leadrboard-col_point">{data[3]}</td>
      <td className="leadrboard-col leadrboard-col_point">{data[2]}</td>
    </tr>
  );
};
