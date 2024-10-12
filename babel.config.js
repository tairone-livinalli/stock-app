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
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@routes': './src/routes',
            '@components': './src/components',
            '@screens': './src/screens',
            '@theme': './src/theme',
            '@data': './src/data',
          },
          extensions: ['.ts', '.tsx'],
        },
      ],
    ],
  }
}
