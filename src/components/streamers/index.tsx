import { STREAMERS } from '../../constants/index';

export const Streamers = () => {
  return (
    <>
      {STREAMERS.map((v, i) => (
        <div key={i}>{v}</div>
      ))}
    </>
  );
};
