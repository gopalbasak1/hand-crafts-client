import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import MyCraft from '../Pages/MyCraft/MyCraft';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import BrandProducts from '../Pages/Brands/BrandProducts';
import AddProduct from '../Pages/Product/AddProduct';
import ProductDetails from '../Pages/Product/ProductDetails';
import Product from '../Pages/Product/Product';
import UpdatedProduct from '../Pages/Product/UpdateProduct';
import Cart from '../Pages/Cart/Cart';


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch("http://localhost:5000/products"),
            },
            {
                path: '/myCraft',
                element: <PrivateRoute>
                    <MyCraft/>
                </PrivateRoute>,
                
                
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
               
            },
            {
                path: "/addProduct",
                element: (
                  <PrivateRoute>
                    <AddProduct />
                  </PrivateRoute>
                ),
            },
            {
                path: "/product",
                element: <Product />,
                loader: () => fetch("http://localhost:5000/products"),
              },
              {
                path: "/product/:id",
                element: (
                  <PrivateRoute>
                    <ProductDetails />
                  </PrivateRoute>
                ),
                loader: ({ params }) =>
                  fetch(`http://localhost:5000/product/${params.id}`),
              },
              {
                path: "/update-product/:id",
                element: (
                  <PrivateRoute>
                    <UpdatedProduct />
                  </PrivateRoute>
                ),
                loader: ({ params }) =>
                  fetch(`http://localhost:5000/product/${params.id}`),
              },

              {
                path: "/cart",
                element: (
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                ),
              },
        ]
    }
])

export default Routes;