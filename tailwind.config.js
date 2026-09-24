/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./BizCenterWaitlist.html",
    "./MyWunderTale/**/*.{html,js}",
    "./wundertale/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        serif: ['Lora', 'Georgia', 'serif']
      },
      colors: {
        brand: {
          // Warm Editorial Theme Palette (Signature Attain AI Labs)
          navy: "#102941",
          navyDeep: "#0d2238",
          green: "#2f6f4e",
          greenDark: "#255a40",
          cream: "#f7f1e4",
          linen: "#efe2cb",
          sand: "#e8dcc8",
          parchment: "#fbf7ed",
          card: "#fffdf7",
          ink: "#11100e",
          muted: "#4d463d",
          subtle: "#71685b",
          border: "rgba(16, 41, 65, 0.14)",
          borderSubtle: "rgba(16, 41, 65, 0.08)",
          // Accent bridges
          accent: "#102941",
          accentHover: "#0d2238",
          emerald: "#2f6f4e"
        }
      },
      boxShadow: {
        'warm-sm': '0 1px 3px rgba(16, 41, 65, 0.06), 0 1px 2px rgba(16, 41, 65, 0.04)',
        'warm-md': '0 4px 12px -2px rgba(16, 41, 65, 0.08), 0 2px 6px -1px rgba(16, 41, 65, 0.04)',
        'warm-lg': '0 10px 24px -4px rgba(16, 41, 65, 0.1), 0 4px 10px -2px rgba(16, 41, 65, 0.05)',
        'card-lift': '0 8px 20px -4px rgba(16, 41, 65, 0.08)'
      }
    }
  },
  plugins: []
};
