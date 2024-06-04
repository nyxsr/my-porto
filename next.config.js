/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/portfolio',
                permanent: true
            }
        ]  
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'media.giphy.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
