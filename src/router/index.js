import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Registration.vue'
import Forum from '../views/Forum.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/contact',
		name: 'Contact',
		component: Contact
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/registration',
		name: 'Registration',
		component: Registration
	},
	{
		path: '/forum',
		name: 'Forum',
		component: Forum
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
