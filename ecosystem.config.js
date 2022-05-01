module.exports = {
  apps : [{
    name   : "Authentica strapi",
    script : "yarn start",
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/authentica-strapi.git',
      path : '/var/www/authentica-original/strapi',
      'pre-deploy-local': 'yarn && yarn build',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
