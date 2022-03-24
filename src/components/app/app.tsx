import React from 'react';
import Main from '../main/main';
import {Routes, Route, HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import NotFound from '../not-found/not-found';

function App():JSX.Element {
  return (
      <HashRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
              <Routes>
                  <Route path={'/'} element={<Main/>}/>
                  <Route path={'*'} element={<NotFound/>}/>
              </Routes>
          </Provider>
      </HashRouter>
  );
}

export default App;
