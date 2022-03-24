import {CSSProperties} from 'react';
import {Audio} from 'react-loader-spinner';

const loadingIdStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '970px',
};

const loadingClassStyle: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  maxWidth: '460px',
  width: '100%',
  textAlign: 'center',
  lineHeight: 1.4,
  flex: '1 0',
};

function Loading ():JSX.Element {
  return (
    <div style={loadingIdStyle} id="loading" data-testid={'loading'}>
      <div style={loadingClassStyle} className="loading">
        <Audio
          height="100"
          width="100"
          color='red'
          ariaLabel='loading'
        />
      </div>
    </div>
  );
}

export default Loading;
