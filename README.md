# This is a test of Wordpress's WP-API along with the node.js client api
Software as is.

## To Install

clone this repo ``` git clone ``` 
then install node dependencies: ``` npm install```
Make sure you have a server running WP-API and change the endpoint variable in routes/index.js to match the server endpoint
``` DEBUG=express:* node app ```
Go to localhost:3000 and you should see the app running.