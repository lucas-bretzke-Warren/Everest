import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import UsersList from '../views/ListingScreen/UsersList'
import RegisterUser from '../views/ListingScreen/RegisterUser'

Vue.use(VueRouter)

const routes = [
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },

  {
    path: '/LoginEmail',
    name: 'LoginEmail',
    component: () => import('../views/Login/LoginEmail')
  },

  {
    path: '/LoginPassword',
    name: 'LoginPassword',
    component: () => import('../views/Login/LoginPassword')
  },

  {
    path: '/DadosDeContato',
    name: 'DadosDeContato',
    component: () => import('../views/Cadastro/DadosDeContato')
  },

  {
    path: '/DadosPessoais',
    name: 'DadosPessoais',
    component: () => import('../views/Cadastro/DadosPessoais')
  },

  {
    path: '/CadastroFinalizado',
    name: 'CadastroFinalizado',
    component: () => import('../views/Cadastro/CadastroFinalizado')
  },

  {
    path: '/UsersList',
    name: 'UsersList',
    component: UsersList
  },

  {
    path: '/RegisterUser',
    name: 'RegisterUser',
    component: RegisterUser
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
