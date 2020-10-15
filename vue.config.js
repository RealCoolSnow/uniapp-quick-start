process.env.UNI_USING_VUE3 = true
process.env.UNI_USING_VUE3_OPTIONS_API = true
module.exports = {
  configureWebpack: {
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      ],
    },
  },
}
