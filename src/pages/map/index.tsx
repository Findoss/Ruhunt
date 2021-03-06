import { IS_MAP_OFF } from 'constants/index';

export const MapPage = () => {
  if (IS_MAP_OFF) return null;

  return (
    <iframe
      title="hunt-map-info"
      src="https://hunt-map.info/?/ru"
      style={{
        position: 'fixed',
        top: '40px',
        left: '0',
        bottom: '0',
        right: '0',
        width: '100%',
        height: 'calc(100% - 40px)',
        border: 'none',
        margin: '0',
        padding: '0',
        overflow: 'hidden',
      }}
    />
  );
};
