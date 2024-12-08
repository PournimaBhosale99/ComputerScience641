/*const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
  
const config = getDefaultConfig(__dirname);
  
module.exports = withNativeWind(config, { input: './global.css' }); */

process.env.EXPO_USE_BRIDGE = '1'; // Force the use of the classic bridge
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.server = {
    experimentalImportSupport: false,
    enableBridge: true, // Enable the classic bridge explicitly
};

module.exports = withNativeWind(config, { input: './global.css' });
