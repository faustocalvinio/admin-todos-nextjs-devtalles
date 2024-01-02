/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname:'tailus.io',
            protocol:'https'
        }] // Especifica el patrón de dominio remoto
    }
}

module.exports = nextConfig;
