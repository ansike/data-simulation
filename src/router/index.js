import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index/index';
import handout from '@/pages/handoutmanagement/index.vue';
import classmanage from '@/pages/classmanagement/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'index', component: index },
    { path: '/handout', name: 'handout', component: handout },
    { path: '/classmanage', name: 'classmanage', component: classmanage }
    // { path: '/menu', name: 'menu', component: menu }
    // { path: '/classManage', name: 'classManage', component: classManage },
    // { path: '/teacheManage', name: 'teacheManage', component: teacheManage }
  ]
});
