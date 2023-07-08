import { createRouter, createWebHistory } from 'vue-router'
import PostList from '../views/PostList.vue'
import PostDetail from '../views/PostDetail.vue'
import PostUpdate from '../views/PostUpdate.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/:id',
      name: 'PostDetail',
      component: PostDetail,
      props: true
    },
    {
      path: '/post/:id',
      name: 'PostUpdate',
      component: PostUpdate
    }
  ]
})

export default router
