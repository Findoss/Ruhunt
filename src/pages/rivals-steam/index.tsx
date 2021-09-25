import './style.css';

const streams = [
  'https://www.twitch.tv/blr_serega',
  'https://www.twitch.tv/AmateurPanda',
  'https://www.twitch.tv/justwhypanda',
  'https://www.twitch.tv/andribetr',
  'https://www.twitch.tv/qvoqa',
  'https://www.twitch.tv/shaco7_7',
  'https://www.twitch.tv/ruko_va',
  'https://www.twitch.tv/sirex_tv_',
  'https://www.twitch.tv/beilfox',
  'https://www.twitch.tv/e1yze',
  'https://www.twitch.tv/kir1ru',
  'https://www.twitch.tv/revoltkam',
];

export const RivalsStreamPage = () => {
  return (
    <div className="streams">
      <br />
      <br />
      {streams.map((url) => (
        <iframe
          key={url}
          title={url}
          src={url}
          frameBorder="0"
          allowFullScreen={true}
          scrolling="no"
          className="stream-iframe"
          height="378"
          width="620"
        ></iframe>
      ))}
    </div>
  );
};
