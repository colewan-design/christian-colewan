<template>
    <v-container class="d-flex flex-column justify-center align-center text-center" style="min-height: 90vh;">
        <!-- Logo -->
        <v-col>
            <v-img src="/Colewan Logo.svg" alt="Logo" max-width="400" class="mx-auto mb-6 rounded-circle" cover />
        </v-col>

        <!-- Title -->
        <h1 class="text-h2 font-weight-bold mb-4">Christian Colewan</h1>

        <!-- Subtitle -->
        <p class="text-subtitle-1 text-grey-darken-1 mb-8" style="max-width: 600px;">
            Welcome to my portfolio — a collection of projects showcasing my skills in
            Laravel, Vue 3, and modern web development.
        </p>

        <!-- Call to Action -->
        <v-btn color="primary" size="x-large" class="px-10 py-4" rounded="xl" to="/projects-gallery" elevation="3">
            View Projects
        </v-btn>
    </v-container>
</template>

<script>
export default {
    name: "HomePage",
};
</script>
