<template>
    <v-app-bar app>

        <v-toolbar-title>
            <div class="d-flex align-center">
                <v-img src="/Colewan Logo.svg" alt="Logo" max-width="40" class="mr-3 rounded-circle" cover />
                <span class="font-weight-bold text-h6">Christian Colewan</span>
                <v-btn variant="text" size="small" @click="themeStore.toggleTheme" icon="">
                    <v-icon>
                        {{ themeStore.selectedTheme === 'light' ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'
                        }}
                    </v-icon>

                </v-btn>
            </div>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="d-flex">
            <v-btn stacked v-for="(item, index) in navItems" :key="index" :to="item.to" variant="text"
                class="text-none">
                {{ item.label }}
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script>
import { useThemeStore } from "@/store/theme";
export default {
    name: "NavigationBar",
    data() {
        return {
            themeStore: useThemeStore(),
            navItems: [
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Projects", to: "/projects-gallery" },
            ],
        };
    },
};
</script>
