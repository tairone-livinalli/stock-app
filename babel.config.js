module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-transform-private-methods', { loose: true }],
      [
        'module:react-native-dotenv',
        { moduleName: '@env', allowUndefined: false },
      ],
    ],
  }
}
