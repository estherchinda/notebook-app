import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AddNewNoteView from '../views/AddNewNoteView.vue';
import EditNoteView from '../views/EditNoteView.vue';
import ViewNoteView from '../views/ViewNoteView.vue';
import TrashView from '@/views/TrashView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/add',
      name: 'add-new-note',
      component: AddNewNoteView,
    },
    {
      path: '/view/:id',
      name: 'view-note',
      component: ViewNoteView,
    },
    {
      path: '/edit/:id',
      name: 'edit-note',
      component: EditNoteView,
    },
    {
      path: '/trash',
      name: 'trash',
      component: TrashView,
    },
  ],
})

export default router
