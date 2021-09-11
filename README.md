# Sanitas
https://sanitas.netlify.app/
Sanitas (Latin for 'health') is a toll that allows you to stay motivated to exercise and work-out in order to stay healthy by insitiating a reward and competition system in the form of a game while also allowing you to keep track of your calory intake and exercise sessions. The purpose of the game is to slowly build the best grassy medow. 
Sanitas is completely browser based; it does not require you to install any apps or additional files. All data is securely stored in the cloud (MongoDB Atlas and GCP). The web-application is highly unlikely to be "down" for any reason since it's hosted completely on the cloud using reliable services; Netlify for front-end and Heroku for back-end. 

To try the app locally, clone the Github Repository or download the code. Navigate into the folder named 'server' and open a Terminal instance. Run 'npm install' followed by 'npm start'. Then navigate to the folder named 'client ---> sanitas' and open another Terminal instance. Again, run 'npm install' followed by 'npm start'. The website will open up on the url; 'localhsot:3000'.

------Technical Details

File structure is clean and scalible.
Code is generally readable and comments have been used to explain additional stuff.

Front-end was built using React as the main frontend framework while also making use of add-ons like React-Router and React-Scroll. 

Server side processing is handled using Express and Cors. Data is stored and fetched using MongoDB Atlas and Google Cloud Platform servers. JsonWebToken (JWT) has been used to ensure safe, secure and smooth login and sign-up protocols, in addition, all passwords are encrypted using Bcrypt.

All of it has benn (obviously) put together with NodeJS.

PS; don't forget to click the Twitter Icon in the footer, just a little joke ;P
