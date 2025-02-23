const path = require('path')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/styles')],
        prependData: `@import "@/styles/mixins.scss";`
    },
    webpack: (config, { isServer }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src')
        }

        if (!isServer) {
            config.resolve.fallback = { fs: false }
        }

        return config
    }
}

module.exports = withPlugins([withImages, withFonts], nextConfig)
