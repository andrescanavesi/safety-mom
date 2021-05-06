# safety-mom

```bash
heroku logs --tail -a safety-mom-staging
```

Run locally and then the env vars will be set automatically
```bash
heroku local
http://localhost:5000/
```

Deploy from local
```bash
heroku git:remote -a safety-mom-staging
git remote rename heroku heroku-staging
git push heroku-staging main
```

Set env vars
```bash
heroku config:set -a safety-mom-staging NODE_ENV=staging 
heroku config:get -a safety-mom-staging NODE_ENV
```

Set all env vars from .env file (WARNING: it will override all!)
`heroku config:set -a safety-mom-staging $(cat .env | sed '/^$/d; /#[[:print:]]*$/d')`

