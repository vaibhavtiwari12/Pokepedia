# **POKEPEDIA**

## **Introduction**

Pokepedia is a MERN applicaiton based on a React- Express framework made by me - Avalon.
**Avalon** is a highly customizable react-express framework which can be used to create the Node based full stack applications. [Read More](https://github.com/vaibhavtiwari12/Avalon)

## **Getting Started**

Application has two parts :

1. **FrontEnd** - this part contains all the react-code and in this case all the code related to pokemon application. This part of application can run individually by just using `npm install` and then `npm start`
2. **Backend** - This is the backend part of the application and it serves two purpose -
   a) It can act as the backend if you choose to write the services and can also act as a relay if you want to connect with the third party APIs which are not CORS supportive.
   b) This can work as the container to run the front-end applicaiton on the App servers like "NGINX" or EC@ machines with the node installtion.(I have used the backend in this mode for pokepedia app)

### Install & Run -

In order to start the application follow the following steps :

1.  Go to the root folder of the applicaiton and run `npm install`. This will install all the dependencies in root, frontend and backend applications.
2.  Run `npm run buld:dev` this will create a optimized build of the the front end applicaiton and will add that to the build folder of backend.
3.  Run `npm start` to start the application with the support of "backend mode". If you choose to run only the frontend application you can go to frontend folder with `cd frontend` then run `npm start`.

## Performance with Google Lighthouse.

- Here is the application performace score on google's Lighthouse integrated with the Dev-tools. As we can can see that there is a little low score for the performace and the major reason for that are the images that are coming from the pokemon API, which are not as highly compressed as they should be.

![Performance Report](https://github.com/vaibhavtiwari12/Pokepedia/blob/main/Performance-lighthouse.png?raw=true)

- Here is the screenshot mentioning the reson for the same.

![Performance Report](https://github.com/vaibhavtiwari12/Pokepedia/blob/main/performance-reason-lighthouse.png?raw=true)
