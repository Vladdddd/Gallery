import { Provider } from 'react-redux';
import './App.css';
import store from '../../redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../nav/Nav';

const ListContainer = lazy(() => import('../list/ListContainer'));
const FullPhotoContainer = lazy(() => import('../list/fullPhoto/FullPhotoContainer'));

//

function App() {
    return (
        <>
            <Nav />
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/" element={<ListContainer />} />
                    <Route path="/full" element={<FullPhotoContainer />} />
                </Routes>
            </Suspense>

        </>
    );
}

let AppContainer = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
}

export default AppContainer;
