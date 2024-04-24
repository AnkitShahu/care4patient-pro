/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      "https://pritams3.sg-host.com/"
    ]
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/get-painless-dental-treatment-at-skye',
        destination: '/dentist-in-skye',
        permanent: true,
      },
      {
        source: '/get-the-best-dental-care-at-sandhurst',
        destination: '/dentist-in-sandhurst',
        permanent: true,
      },
      {
        source: '/affordable-dental-services-at-patterson-lakes',
        destination: '/dentist-in-patterson-lakes',
        permanent: true,
      },
      {
        source: '/we-are-your-go-to-dentist-in-cranbourne-west',
        destination: '/dentist-in-cranbourne-west',
        permanent: true,
      },
      {
        source: '/looking-for-a-dentist-in-frankston-north',
        destination: '/dentist-in-frankston-north',
        permanent: true,
      },
      {
        source: '/find-the-best-dentist-in-seaford',
        destination: '/dentist-in-seaford',
        permanent: true,
      },
      {
        source: '/get-all-your-dental-needs-handled-in-lyndhurst',
        destination: '/dentist-in-lyndhurst',
        permanent: true,
      },
      {
        source: '/affordable-dental-services-at-langwarrin',
        destination: '/dentist-in-langwarrin',
        permanent: true,
      }
    ]
    }
    
}

module.exports = nextConfig
