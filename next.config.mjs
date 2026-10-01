/** @type {import('next').NextConfig} */
const nextConfig = {
  // The old site was plain .html files. Keep any old links/bookmarks working.
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/projects.html', destination: '/projects', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
    ];
  },
};

export default nextConfig;
