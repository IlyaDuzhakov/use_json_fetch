# use_json_fetch

## Project Description

This project demonstrates working with HTTP requests using React and a custom hook.

## Backend

A server was created using Node.js and Express.

Available GET endpoints:

- `/loading` — simulates a long loading request
- `/data` — returns successful response data
- `/error` — simulates a request with an error

## Frontend

### Custom Hook: useJsonFetch

A custom React hook `useJsonFetch` was created to handle HTTP requests.

The hook allows:

- fetching data from the server
- handling loading state
- handling request errors

## Functionality

The application demonstrates how `useJsonFetch` works with:

- successful requests
- failed requests
- delayed loading responses

## Technologies Used

- React
- Custom Hooks
- Node.js
- Express
- Fetch API
- REST API

## Deployment

Frontend deployed on Vercel:  
https://use-json-fetch-frontend-8njtcxy04-ilya-frontend.vercel.app

Backend deployed on Render:  
https://use-json-fetch-backend-evax.onrender.com