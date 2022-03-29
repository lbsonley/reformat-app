# Reformat App

The App for the School that is chaing the World.

## Local Development Setup

This project uses yarn workspaces. So you can start the 

### Start Backend

Start a local development server and database

```sh
cd backend

docker-compose-up
```

Open your browser to `localhost:4000/graphql`. You should the the Apollo Graphql Studio.

### Start Frontend

Create a file `.env.local` in the `frontend` directory with the folling content.

```env
API_URI = http://localhost:4000/graphql
```

Start the frontend

```sh
cd ../frontend

yarn run dev
```

Open your browser to `localhost:3000` and the app should be running.

## Deployments

The backend is deploy to Heroku. The `build` command in the workspace root package.json is executed by Heroku during deployments.

The frontend is deployed to Vercel.

New deploys for both frontend abd backend are automatically triggered when changes are pushed to the `main` branch.
