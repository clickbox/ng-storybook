const path = require("path");

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.alias = {
    ...storybookBaseConfig.resolve.alias,
    angular: require.resolve("angular"),
    jss: require.resolve("jss"),
    preset: require.resolve("jss-preset-default"),
  };

  return storybookBaseConfig;
};
