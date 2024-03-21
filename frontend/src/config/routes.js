import {createRouter, createWebHistory} from 'vue-router'
import VueCookies from 'vue-cookies'
// import all components that will be used as routes
import AcademicReport from '../views/AcademicReport.vue'
import DashBoard from '../views/DashBoard.vue'
import FinanceBreakdown from '../views/FinanceBreakdown.vue'
import GradeBreakdown from '../views/GradeBreakdown.vue'
import LoginScreen from '../views/LoginScreen.vue'
import MiscLinks from '../views/MiscLinks.vue'
import ProfileInfo from '../views/ProfileInfo.vue'
import SchedBuilder from '../views/SchedBuilder.vue'
import ApplicationHomepage from '../views/ApplicationHomepage.vue'

// map routes to components imported above
const routes =  [
    { path: '/login', component: LoginScreen },
    { path: '/dashboard', component: DashBoard },
    { path: '/finances', component: FinanceBreakdown },
    { path: '/grades', component: GradeBreakdown },
    { path: '/misc', component: MiscLinks },
    { path: '/profile', component: ProfileInfo },
    { path: '/schedule', component: SchedBuilder },
    { path: '/academics', component: AcademicReport},
    { path: '/application', component: ApplicationHomepage}
]

// create the router instance and export it
const router = createRouter({
    history: createWebHistory(),
    routes,
})
// check if the user is logged in before navigating to any route
router.beforeEach((to, from, next) => {
    if (to.path === '/')  {
        if (VueCookies.get('auth-token')) {
            next('/dashboard')
        } else {
            next('/login')
        }
        
    } 
    else {
        next()
    }
})
export default router