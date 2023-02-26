const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'solito',
  'moti',
  'nativewind',
  'app',
])

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
    swcPlugins: [
      [
        ['typewind/swc', {}],
        require.resolve('./plugins/swc_plugin_reanimated.wasm'),
      ],
    ],
  },
  reactStrictMode: true,
}

module.exports = withPlugins([withTM, withExpo], nextConfig)
