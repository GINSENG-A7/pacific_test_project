import {createRouter, createWebHistory} from "vue-router";
import Wellcome from "@/pages/Wellcome";
import TestPageOne from "@/pages/TestPageOne";

const routes = [
	{
		path: "/",
		component: Wellcome
	},
	{
		path: "/test1",
		component: TestPageOne
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL),
});

export default router;