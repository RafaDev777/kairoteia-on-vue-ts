import * as vR from 'vue-router';
import DashboardVue from '@pages/Dashboard.vue';
import Pnf from "@pages/NotFoundPage.vue"


const _routes:Array<vR.RouteRecordRaw> =[
    {
        path:"/",
        component:DashboardVue,
        name:"home"
    },
    {
        path:"/demo",
        component:()=>import("@pages/DemoPage.vue"),
        name:"home.demo"
    },
    {
        path:"/nf",
        component:Pnf,
        name:"home.missing"
    },

]
const router = vR.createRouter({
    history: vR.createWebHistory(),
    routes: _routes,

});

export default router