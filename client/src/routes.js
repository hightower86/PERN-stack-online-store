import Admin from "./pages/Admin"
import Basket from "./pages/Basket"
import Auth from "./pages/Auth"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE } from "./utils/constants"
import Device from "./pages/Device"


export const authRoutes = [
    { path: ADMIN_ROUTE, Component: Admin },
    { path: BASKET_ROUTE, Component: Basket }
]

export const publicRoutes = [
    { path: BASKET_ROUTE, Component: Basket },
    { path: SHOP_ROUTE, Component: Shop },
    { path: REGISTRATION_ROUTE, Component: Auth },
    { path: LOGIN_ROUTE, Component: Auth },
    { path: DEVICE_ROUTE + '/:id', Component: Device }
]