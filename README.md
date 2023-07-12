# api-flood

## to run this api locally

1. clone this repo
2. install dependencies with `npm install`
3. create a `.env` file in the same directory as `index.js`
4. past the connection string into the `.env` file. it'll be one line that looks like this: `MONGO_URI=mongodb+srv://<username>:<password>@<database_address>?retryWrites=true&w=majority`
5. run with `node index.js`
   >  ![image](https://github.com/woodstockcs/api-flood/assets/7727226/7523d6d8-dfe6-40ae-84b0-03a3840a6b29)
6. test that it's working by pointing a browser to `http://localhost:5000/api/posts` (or change the 5000 if the server is listening on a different port)
   >  ![image](https://github.com/woodstockcs/api-flood/assets/7727226/3701fe16-bcdf-44c9-afef-ee8bdfe672d9)

## to connect to this api from a react app

1.
1.
1.
