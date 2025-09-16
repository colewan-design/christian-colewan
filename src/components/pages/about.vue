<template>
    <v-container class="py-12">
        <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
                <!-- Profile Image -->
                <v-avatar size="120" class="mb-6">
                    <v-img src="/Colewan Logo.svg" alt="Profile" cover></v-img>
                </v-avatar>

                <!-- Title -->
                <h1 class="text-h3 font-weight-bold mb-4">About Me</h1>

                <!-- Subtitle -->
                <p class="text-subtitle-1 text-grey-darken-1 mb-8">
                    I’m <strong>Christian Colewan</strong>, a Laravel and Vue developer with a passion
                    for building modern, efficient, and user-friendly web applications.
                </p>

                <!-- Highlights -->
                <v-row dense>
                    <v-col cols="12" sm="4">
                        <v-card elevation="2" class="pa-6 rounded-xl">
                            <v-icon size="32" color="primary" class="mb-3">mdi-code-tags</v-icon>
                            <h3 class="text-h6 font-weight-medium mb-2">Full-Stack Dev</h3>
                            <p class="text-body-2 text-grey-darken-1">
                                Experienced with Laravel, Vue 3, Vuetify, and Pinia for scalable applications.
                            </p>
                        </v-card>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <v-card elevation="2" class="pa-6 rounded-xl">
                            <v-icon size="32" color="primary" class="mb-3">mdi-lightbulb-on-outline</v-icon>
                            <h3 class="text-h6 font-weight-medium mb-2">Problem Solver</h3>
                            <p class="text-body-2 text-grey-darken-1">
                                Skilled in troubleshooting, debugging, and creating efficient solutions.
                            </p>
                        </v-card>
                    </v-col>

                    <v-col cols="12" sm="4">
                        <v-card elevation="2" class="pa-6 rounded-xl">
                            <v-icon size="32" color="primary" class="mb-3">mdi-account-group</v-icon>
                            <h3 class="text-h6 font-weight-medium mb-2">Team Player</h3>
                            <p class="text-body-2 text-grey-darken-1">
                                Collaborates effectively in teams, ensuring smooth development workflows.
                            </p>
                        </v-card>
                    </v-col>
                </v-row>

                <!-- Call to Action -->
                <div class="mt-12">
                    <v-btn color="primary" size="large" rounded="xl" to="/projects-gallery">
                        View My Work
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "AboutPage",
};
</script>
