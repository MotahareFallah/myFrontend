import { createRouter, createWebHistory } from "vue-router";
import HomeView        from "../views/HomeView.vue";
import DetailView      from "../views/DetailView.vue";
import AboutView       from "../views/AboutView.vue";
import ProfileView     from "../views/ProfileView.vue";
import AddView         from "../views/AddView.vue";
import LoginView       from "../views/LoginView.vue";
import LogoutView      from "../views/LogoutView.vue";
import store           from "../store";
import RegisterView    from "../views/RegisterView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/article/:slug",
    name: "DetailView",
    component: DetailView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
    meta: { loginRequired: true },
  },
  {
    path: "/add",
    name: "Add",
    component: AddView,
    meta: { loginRequired: true },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: { loginRedirect: true },
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
    meta: { loginRedirect: true },
  },
  {
    path: "/logout",
    name: "Logout",
    component: LogoutView,
    meta: { loginRequired: true },
  },
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.loginRequired)) {
    if (store.state.isAthenticated) {
      next();
    } else {
      next("/login");
    }
  } else if (to.matched.some((record) => record.meta.loginRedirect)) {
    if (!store.state.isAthenticated) {
      next();
    } else {
      next("/profile");
    }
  } else {
    next();
  }
});

export default router;
