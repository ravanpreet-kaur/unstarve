
This repository contains the backend codebase for UnStarve which is built using Node.js, Express.js and CockroachDB.

## Getting Started

To get started with the backend code, follow these steps:

1. *Clone this repository to your local machine using* ``` git clone https://github.com/ravanpreet-kaur/unstarve.git ```
2. *Navigate to the backend directory using* ```cd backend ```
3. *Install the necessary dependencies using* ```npm install```
4. *Copy the .env.example file to a new file called .env and fill in the required environment variables, mainly:*
    ```
     DATABASE_URL -> The connection URL string to your CockroachDB instance 
     PORT -> The port on which your application will run
     COHERE -> Cohere API key
     TWILIO -> Twilio API key
     TWILIO_SID -> Twilio SID
    ```
5. *Start the server using* ```nodemon```


Note: Make sure you have Node and NPM installed on your machine before proceeding with the installation.

## Usage
Once the server is up and running, you can use the following API endpoints to interact with the backend:

* */restaurants* - GET all restaurants
* */restaurants/:id* - GET a specific restaurant by ID
* */restaurants* - POST a new restaurant
* */orders* - GET all orders
* */orders/:id* - GET a specific order by ID
* */user/:id* - GET a specific user by ID
* */user/add* - Create a new user 
* */suggestion/:prompt* - Generate recommendations based on the prompt provided by the user




