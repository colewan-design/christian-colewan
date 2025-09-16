import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/pages/home.vue";
import PlantillaPositions from "@/components/pages/plantilla_positions.vue";
import ProjectsGallery from "@/components/pages/gallery.vue";
import AboutPage from "@/components/pages/about.vue";

const routes = [
    { path: "/", name: "Home", component: HomePage },
    { path: "/projects-gallery", name: "ProjectsGallery", component: ProjectsGallery },
    { path: "/plantilla-positions", name: "PlantillaPositions", component: PlantillaPositions },
    { path: "/about", name: "AboutPage", component: AboutPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
