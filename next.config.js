/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/odin',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig