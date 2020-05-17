import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import FriendSearch from "@/views/Friends/search";
import FriendDetail from "@/views/Friends/detail";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [{
        path: "/",
        component: Home
    }, {
        path: "/friends/search",
        component: FriendSearch
    }, {
        path: "/friend/:id",
        component: FriendDetail
    }]
});

export default router;