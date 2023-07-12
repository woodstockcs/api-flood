# api-flood

## to run this api locally

1. clone this repo
1. install dependencies with `npm install`
1. create a `.env` file in the same directory as `index.js`
1. past the connection string into the `.env` file. it'll be one line that looks like this: `MONGO_URI=mongodb+srv://<username>:<password>@<database_address>?retryWrites=true&w=majority`
1. run with `node index.js`
1. test that it's working by pointing a browser to `http://localhost:5000/api/posts` (or change the 5000 if the server is listening on a different port)

## to connect to this api from a react app

1.
1.
1.
