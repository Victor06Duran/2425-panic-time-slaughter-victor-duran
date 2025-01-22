import express from "express";

const app = express();
const port = 3000;


async function start() { 
  try {
      
      app.listen(port, () => {
          console.log(`Server is listening on port ${port}`);
          setTimeout(function(){
              process.send('ready');
          }, 2000) 
       }); 

  } 
  catch (error) {
      console.log(`Error starting the server: ${error.message}`);
  } 
}

start();
