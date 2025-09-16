import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
    state: () => ({
        selectedTheme: localStorage.getItem("theme") || "light",
    }),
    actions: {
        toggleTheme() {
            this.selectedTheme = this.selectedTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", this.selectedTheme);
        },
    },
});
