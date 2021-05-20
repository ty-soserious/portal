import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import app1Main from "./components/app1/app1Main.vue";
import app1List from "./components/app1/app1List.vue";
import app1ItemDetail from "./components/app1/app1ItemDetail.vue";
import app2List from "./components/app2/app2List.vue";
import app3List from "./components/app3/app3List.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "app1",
      path: "/app1",
      component: app1Main,
      children: [
        { name: "app1List", path: "", component: app1List },
        { name: "app1ItemDetail", path: "detail", component: app1ItemDetail },
      ],
      // children: [
      //   { name: 'team-members', path: ':teamId', component: TeamMembers, props: true } // /teams/t1
      // ]
    }, // our-domain.com/teams => TeamsList
    {
      name: "app2",
      path: "/app2",
      component: app2List,
    },
    {
      name: "app3",
      path: "/app3",
      component: app3List,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
