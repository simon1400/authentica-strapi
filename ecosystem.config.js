module.exports = {
  apps : [{
    name   : "Authentica strapi",
    script : "yarn start",
    env_production: {
      HOST:"0.0.0.0",
      PORT:1340,
      APP_KEYS:"VtJmJ/asmp11LACRtwYAGg==,wtNAi4J+JnUUPEudas+jiA==,y8YhqV0Z8TjzlVkc6xPeEw==,7HixGcHKpG1Vk/i97tVn/g==",
      API_TOKEN_SALT:"IzQfHmVUqqBk1JqzvEwbog==",
      ADMIN_JWT_SECRET:" 9QjY3n+cWnVEcSGSzo5SPw==",
      JWT_SECRET:"juwtn0n2V2NeaGjfZpCANw==",
    }
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/authentica-strapi.git',
      path : '/var/www/authentica-original/strapi',
      'pre-deploy-local': 'git add . && git commit -m "pm2 deploy auto commit" && git push origin main',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
