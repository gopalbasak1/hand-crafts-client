import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import MyCraft from '../Pages/MyCraft/MyCraft';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import BrandProducts from '../Pages/Brands/BrandProducts';
import AddProduct from '../Pages/Product/AddProduct';

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
                element: <PrivateRoute>
                    <MyCraft/>
                </PrivateRoute>
            },
            {
                path: '/login',
                element: <Login/>,
            },
            {
                path: '/register',
                element: <Register/>
            }
            ,
            {
                path: "/brand/:name",
                element: <BrandProducts />,
                loader: ({ params }) =>
                fetch(
                    `http://localhost:5000/brands/${params.name}`
                ),
            },
            {
                path: "/addProduct",
                element: (
                  <PrivateRoute>
                    <AddProduct />
                  </PrivateRoute>
                ),}
        ]
    }
])

export default Routes;