/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],  // Aquí agregamos 'localhost' o el dominio de tu API
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'example.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'assets.example.com',
                port: '',
                pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'ejemplo.com',
                port: '',
                pathname: '/**',
            },
        ],
    },

    webpack(config) {
        config.resolve.alias['@'] = __dirname;
        return config;
    },

    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: false,
    },
};

export default nextConfig;
