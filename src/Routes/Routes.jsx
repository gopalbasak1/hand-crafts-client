import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import MyCraft from '../Pages/MyCraft/MyCraft';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/myCraft',
                element: <MyCraft/>
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default Routes;