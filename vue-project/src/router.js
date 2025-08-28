import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './view/HomeView.vue'
import AboutView from './view/AboutView.vue'
import day04_08_27 from './view/day04_08_27.vue'
import Ex_WebDesign from './view/Ex_WebDesign.vue'
import day01_08_22 from './view/day01_08_22.vue'
import day02_08_25 from './view/day02_08_25.vue'
import day03_08_26 from './view/day03_08_26.vue'
import Ex_A1 from './webDesign/Ex_A1.vue'
import Ex_B2 from './webDesign/Ex_B2.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: "/day04_08_27/", component: day04_08_27 },
    { path: "/day01_08_22/", component: day01_08_22 },
    { path: "/day02_08_25/", component: day02_08_25 },
    { path: "/day03_08_26/", component: day03_08_26 },


    {
        path: "/wd",
        component: Ex_WebDesign,
        children: [
            {
                path: "/wd/a1",
                component: Ex_A1
            },
            {
                path: "/wd/b2",
                component: Ex_B2
            }
        ]

    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router