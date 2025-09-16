<template>
    <v-container class="py-12">
        <h2 class="text-h4 font-weight-bold mb-8 text-center">
            Featured Projects
        </h2>

        <v-row dense align="stretch">
            <v-col v-for="(project, index) in projects" :key="index" cols="12" sm="6" md="4">
                <v-card class="rounded-xl hover-scale" elevation="3">
                    <!-- Live Preview -->
                    <iframe v-if="project.preview" :src="project.preview" class="rounded-t-xl"
                        style="width: 100%; height: 200px; border: none;"></iframe>

                    <!-- Fallback image if no live preview -->
                    <v-img v-else :src="project.image" height="200" cover class="rounded-t-xl" />

                    <v-card-title class="font-weight-bold text-h6">
                        {{ project.title }}
                    </v-card-title>
                    <v-card-subtitle class="text-grey-darken-1">
                        {{ project.subtitle }}
                    </v-card-subtitle>
                    <v-card-text>
                        {{ project.description }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" variant="flat" size="small" :href="project.link" target="_blank">
                            View
                        </v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "ProjectsGallery",
    data() {
        return {
            projects: [
                {
                    title: "Plantilla Positions",
                    subtitle: "Vue + Vuetify",
                    description:
                        "Browse and manage government plantilla positions with salary details.",
                    image: "/plantilla-positions.png",
                    preview: "https://christian-colewan.netlify.app/plantilla-positions",
                    link: "https://christian-colewan.netlify.app/plantilla-positions",
                },
                {
                    title: "Eishi Partners Website",
                    subtitle: "Vue 3 + Vuetify",
                    preview: "https://eishipartners.com/",
                    description: "A professional real estate website designed to serve customers in the Philippines, offering property insights and investment opportunities.",

                    image: "/eishi.png",
                    link: "https://eishipartners.com/",
                },
                {
                    title: "BSU Payroll System",
                    subtitle: "Laravel 11 + Vue 3 + Vuetify 3 + Vite",
                    description:
                        "Backend service for real-time payroll processing and reporting.",
                    image: "/payroll-system.png",
                    link: "#",
                },
            ],
        };
    },
};
</script>

<style scoped>
.hover-scale {
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.hover-scale:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
</style>
