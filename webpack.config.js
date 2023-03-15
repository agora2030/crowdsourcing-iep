const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      performance: { hints: false },
      babel: {
        dangerouslyAddModulePathsToTranspile: [
          "@rneui/base",
          "@rneui/themed",
          "@planetscale/database",
        ],
      },
    },
    argv
  );
  config.resolve.alias['lottie-react-native'] = 'react-native-web-lottie';
  return config;
};
