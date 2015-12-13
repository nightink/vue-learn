import Vue from 'vue';
import Router from 'vue-router';
// import { domain, fromNow } from './filters';
import App from './components/app.vue';
import Todo from './components/todo.vue';

// install router
Vue.use(Router);

// register filters globally
// Vue.filter('fromNow', fromNow);
// Vue.filter('domain', domain);

// routing
const router = new Router();

router.map({
  '/todo': {
    component: Todo
  },
});

router.beforeEach(function() {
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/todo'
});

router.start(App, '#app');
