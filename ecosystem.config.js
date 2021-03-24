module.exports = {
  apps: [
    {
      name: 'evobot',
      exec_mode: 'cluster',
      instances: 2, // Or a number of instances
      script: './index.js',
      args: 'start',
      watch: true,
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
}