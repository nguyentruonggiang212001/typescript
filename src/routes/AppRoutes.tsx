import { useRoutes } from "react-router-dom"
import AboutProducts from "../pages/AboutProducts"
import LoginPage from "../pages/LoginPage"
import NotFoundPage from "../pages/NotFoundPage"
import RegisterPage from "../pages/RegisterPage"
import LayoutAdmin from "../components/layouts/LayoutAdmin"
import HomePage from "../pages/HomePage"
import ProductTable from "../pages/admin/ProductTable"
import ProductForm from "../pages/admin/ProductForm"

export const AppRoutes = () => {
    const routes = [
        {path: "/",element:<HomePage/>},
        {path: "/about",element:<AboutProducts/>},
        {path: "/register",element:<RegisterPage/>},
        {path: "/login",element:<LoginPage/>},
        {
            path:"/admin",
            element:<LayoutAdmin/>,
            children:[
               {path: "products",element:<ProductTable/>}, 
               {path: "products/add",element:<ProductForm/>},
               {path: "products/update/:id",element:<ProductForm/>}, 
            ],
        },
        {path:"*",element:<NotFoundPage/>}
    ]
    return useRoutes(routes)
    
}

export default AppRoutes;