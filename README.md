# RabbitMQ Client
This server uses the [Topics](https://www.rabbitmq.com/tutorials/tutorial-five-javascript.html) (Receiving messages based on a pattern 'topics') logic to consume messages from RabbitMQ

# Libs
In this project we are using [jackrabbit](https://github.com/hunterloftis/jackrabbit) but there is another one you can use [rabbot](https://github.com/arobson/rabbot)

# To setup and use project

## Create an `.env` file
- add `MONGO_DB_CONNECTION`
- add `CLOUDAMQP_URL`

## Install ddependecies
`npm install`

## Start server in dev mode
before eu start the server first start your rabbitMQ server and the publisher then:
`npm run dev`


# Integrations
In this project we integrate with [Omie's ERP](https://developer.omie.com.br/)
in order to proper use add `OMIE_URL` to your `.env` file as well `OMIE_ACCESS_KEY` and `OMIE_SECRET_KEY`
