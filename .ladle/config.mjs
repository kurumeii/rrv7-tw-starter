/** @type {import('@ladle/react').UserConfig} */
export default {
  stories: "app/**/*.stories.{js,jsx,ts,tsx,mdx}",
  viteConfig: process.cwd() + "/.ladle/vite.config.ts",
  addons: {
    a11y: {
      enabled: true,
    },
    theme: {
      enabled: true,
      defaultState: "dark",
    },
  },
  appendToHead: '<link rel="icon" type="image/x-icon" href="/favicon.ico" />',
};
