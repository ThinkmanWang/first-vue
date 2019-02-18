import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router);

const Login = (resolve) => {
    import('@/components/login/login').then((module) => {
        resolve(module)
    })
};

export default new Router({
    routes: [
        {
            path: "/login"
            , component: Login
        }
    ]
})