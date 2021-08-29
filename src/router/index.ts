import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Home from "../views/Home.vue";
import TemplateDetail from "../views/TemplateDetail.vue";
import Editor from "../views/Editor.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "index",
      path: "/",
      component: Index,
      redirect: "/home",
      children: [
        {
          name: "home",
          path: "home",
          component: Home,
        },
        {
          name: "template",
          path: "template/:id",
          component: TemplateDetail,
        },
      ],
    },
    {
      name: "editor",
      path: "/editor/:id",
      component: Editor,
    },
    {
      name: "notfound",
      path: "/404",
      component: NotFound,
    },
  ],
});
export default router;
