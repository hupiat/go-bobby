const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    resolver: {
        assetExts: ['bin', 'txt', 'jpg', 'png', 'ttf'],
        sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx'],
      },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
