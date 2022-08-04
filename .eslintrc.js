module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-cosmic`
  extends: ["cosmic"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
