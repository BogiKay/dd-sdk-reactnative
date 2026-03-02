module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      '@datadog/mobile-react-native-babel-plugin',
      {
        sessionReplay: {
          // Enable SVG tracking for Session Replay (default: false)
          svgTracking: true
        },
        components: {
          // Use component content as action name (default: true)
          useContent: false,
          // Prefix actions with component name (default: true)
          useNamePrefix: false,
        },
      },
    ],
  ],
};
