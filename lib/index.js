import Vue from 'vue';
import Router from 'vue-router';
import App from './components/app.vue';
import Todo from './components/todo.vue';
import NewsView from './components/news_view.vue';
import ItemView from './components/item_view.vue';

// install router
Vue.use(Router);

// routing
const router = new Router();

router.map({
  '/news': {
    component: NewsView,
  },
  '/item/:id': {
    name: 'ItemView',
    component: ItemView,
  },
  // first learn vue.js
  '/todo': {
    component: Todo,
  },
});

router.redirect({
  '*': '/news',
});

router.start(App, '#app');
