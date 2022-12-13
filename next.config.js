/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    EMAIL_JS_API_KEY: process.env.EMAIL_JS_API_KEY,
    EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
    EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID
  },
}

module.exports = nextConfig
