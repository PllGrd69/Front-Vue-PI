import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ListarPersonasComponent from './components/ListarPersonasComponent'
import NuevaPersonaComponent from './components/NuevaPersonaComponent'
import Login from './components/Login'
import HomeAdmin from './components/HomeAdmin'

Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  { path: '/', 
    name: 'homeadmin', 
    component: HomeAdmin },
  { path: '/listar-persona', 
    name: 'listarpersona', 
    component: ListarPersonasComponent },
  { path: '/crear-persona',
    name: 'crearpersona', 
    component: NuevaPersonaComponent },
  { path: '/editar-persona/:id?', 
    name: 'actualizarpersona', 
    component: NuevaPersonaComponent },
  { path: '/login', 
    name: 'login', 
    component: Login },

]

const router = new VueRouter({
  mode: "history",
  routes
});

// export default router;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
