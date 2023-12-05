import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Register from "../pages/Register";
import AddProduct from "../pages/AddProduct";
import Detail from "../pages/Detail";
import Profile from "../pages/Profile";
export const publicRoute = [
    {path:"/",component: Home},
    {path:"/about",component: About},
    {path:"/contact",component: Contact},
    {path:"/menu",component: Menu},
    {path:"/register",component: Register},
    {path:"/login",component: Login},
    {path:"/profile",component: Profile},
    {path:"/add-product",component: AddProduct},
    {path:"/detail/:id",component: Detail}
]
