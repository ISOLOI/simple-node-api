 # Simple CRUD API NodeJS w/ ExpressJS TypeScript

## 1 - Install

`npm install`

## 2 - DB migrate

`npm run typeorm migration:run`

## 3 - run

`npm run dev`

> req

| Method | URL | BODY |
| :-: | :-: | :-: |
| GET | /users/ |  |
| POST | /users/ | {"name":"Nick",<br>"email":"nick@gmail.com"} |
| PATCH | /user/ | {"name":"Ditto",<br>"email":"ditto@email.com",<br>"id":"ID"} |
| DELETE | /user/:id |  |
