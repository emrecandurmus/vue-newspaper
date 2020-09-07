import {Login, Register} from './pages'

const routesModel = {
    routes: [
        { path: '/', name: 'Dashboard', redirect: '/login' },
        { path: '/login', name: 'Login', component: Login },
        { path: '/register', name: 'Register', component: Register }
    ],
    mode: 'history'
}

export default routesModel