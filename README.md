# safety-mom

```bash
heroku logs --tail -a safety-mom-staging
```

Run locally and then the env vars will be set automatically
```bash
heroku local
http://localhost:5000/
```
```bash


heroku git:remote -a safety-mom-staging
git remote rename heroku heroku-staging
git push heroku-staging main
```


`heroku config:set -a safety-mom-staging NODE_ENV=staging`
