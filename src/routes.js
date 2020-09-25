import {Login} from './pages'

const routesModel = {
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'Login', component: Login },
    ],
    mode: 'history'
}

export default routesModel
