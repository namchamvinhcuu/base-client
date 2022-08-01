import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from './libraries/history';

import Login from './shared-components/Login';
import PageNotFound from './shared-components/PageNotFound/index';
import Layout from './shared-components/Layout/index';

function App() {
  return (
    <>
      <ToastContainer />

      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/layout" element={<Layout />} >
            {/* <Route element={<Layout Menus={menus} userName={userName} fistMenu={fistMenu} />}>
              {routers}
            </Route> */}
            {/* {link} */}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </HistoryRouter>

    </>
  );
}


export default App;
