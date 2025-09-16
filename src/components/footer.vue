<template>
    <!-- Footer -->
    <v-footer class="mt-12 py-6" elevation="0" padless>
        <v-container>
            <v-row justify="center" align="center">
                <v-col cols="12" class="text-center">
                    <!-- Social Links -->
                    <div class="mb-2">
                        <v-btn icon variant="text" size="small" href="https://www.facebook.com/teekunana"
                            target="_blank">
                            <v-icon>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn icon variant="text" size="small" href="https://www.youtube.com/@christiancolewan"
                            target="_blank">
                            <v-icon>mdi-youtube</v-icon>
                        </v-btn>
                        <v-btn icon variant="text" size="small" href="https://github.com/colewan-design"
                            target="_blank">
                            <v-icon>mdi-github</v-icon>
                        </v-btn>
                        <v-btn icon variant="text" size="small"
                            href="https://www.linkedin.com/in/christian-colewan-a936b713a/" target="_blank">
                            <v-icon>mdi-linkedin</v-icon>
                        </v-btn>
                    </div>

                    <!-- Copyright -->
                    <div class="text-gray-500">
                        © {{ new Date().getFullYear() }} Christian Colewan. All rights reserved.
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>