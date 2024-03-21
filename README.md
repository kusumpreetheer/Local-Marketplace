## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Instructions to run your schema and seeding scripts

Path to schema script: ```lib > database > models ``` 

Path to seeding script: ```app > api > seed > route.ts ```

(A copy of the seeding and schema script is attached in the zip file)

## Can curl be used?
Since clerk is being employed to authenticate the application, it is protecting the api route. Instead in order to populate the user information, the application can be run using ``` npm run dev```, in the home page of the front-end, 'seed data' button can be pressed. The code for this button can be found in ```lib > SeedButton.tsx ```, when the button is pressed, it would trigger the api seed, this api call is calling ```app > api > seed > route.ts ```. This function receives a post request it would delete and create all users.

## How to delete and create users?
It can be done using ```lib > actions > ``` where service and users can be edited.

## How to connect to database?
database can be accessed and connected to using the file ```lib > database > index.ts ``` contains the script. But it cannot be used since we might need access to .env.local