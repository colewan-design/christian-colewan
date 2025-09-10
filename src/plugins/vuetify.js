import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components";
import { VFileUpload } from 'vuetify/labs/VFileUpload';

const customTheme = {
  dark: false, // Define dark mode status here
  colors: {
    primary: "#0D47A1",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    lightblue: "#14c6FF",
    yellow: "#FFCF00",
    pink: "#FF1976",
    orange: "#FF8657",
    magenta: "#C33AFC",
    darkblue: "#1E2D56",
    gray: "#909090",
    neutralgray: "#9BA6C1",
    green: "#2ED47A",
    red: "#FF5c4E",
    darkblueshade: "#308DC2",
    lightgray: "#BDBDBD",
    lightpink: "#FFCFE3",
    white: "#FFFFFF",
    muted: "#6c757d",
    bluegrayBG: "#ECEFF1",
    sidebarIconColor: "#424242",
    subFolderIconColor: "#DD2C00",
  },
};

const vuetify = createVuetify({
  components: {
    VFileUpload,
    ...components,
    ...labsComponents,
  },
  directives,
  theme: {
    defaultTheme: "customTheme", // Correct theme name
    themes: {
      customTheme, // Register the custom theme correctly
      light: {
        dark: false,
        colors: {
          primary: "#0D47A1",
          background: "#ECEFF1",
          secondary: "#424242",
          accent: "#82B1FF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          lightblue: "#14c6FF",
          yellow: "#FFCF00",
          pink: "#FF1976",
          orange: "#FF8657",
          magenta: "#C33AFC",
          darkblue: "#1E2D56",
          gray: "#909090",
          neutralgray: "#9BA6C1",
          green: "#2ED47A",
          red: "#FF5c4E",
          darkblueshade: "#308DC2",
          lightgray: "#BDBDBD",
          lightpink: "#FFCFE3",
          white: "#FFFFFF",
          muted: "#6c757d",
          bluegrayBG: "#ECEFF1",
          sidebarIconColor: "#424242",
          subFolderIconColor: "#DD2C00",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#000000", // Dark mode background
          surface: "#212121", // Slightly lighter than background
          sidebarIconColor: "#FAFAFA",
          subFolderIconColor: "#DD2C00",
        },
      },
    },
  },
});

export default vuetify;
