# Note-Taker-App

## Description

When creating apps that allow users to enter information that needs to be referenced later, it is important for that data to be accessible over a long amount of time. Local storage can help, but if the users ends the browser session or clears their local storage, all the saved information is lost. 

With the Note Taker App, users will be able to enter informative notes and be able to reference them in perpetuity. This is possible through the use of backend routing. The routes that I have created allow users to get all the notes that are stored, post new notes, and see all of the HTML pages this app has to offer. Additionally, this app is delpoyed and hosted by Heroku, ensuring that the app, the backend routes, and all entered notes remain accessible.

In this project I learned the importance of utilizing express.js to create routing links to move data from the frontend to the backend and vice versa. There are other important concepts that aid in this goal, such as making the routing modular, which allows for quick scalability for future development. Additionally hosting the node server through a service like Heroku prevents the user from needing to install the app on their machine. They just have to access the URL and they have all the functionality.

## Installation

Due to this app being hosted on Heroku, users only need to access the following web URL to use the app: https://still-reef-93947.herokuapp.com/

If by any chance you wish to run the node server from your local machine you should follow these steps:
    1) Download the repo onto your machine
    2) Install all of the dependencies
    3) From the repo root, run `node server.js` or a similar command to launch node
    4) Access the following link to use the app locally! http://localhost:3001/

## Usage

To access the Note Taker App, follow one of the methods in the Installation section above.

You will be greeted with the landing page. Click the Get Started button to enter. Inside you will see a column on the left containing any stored notes and an open area to the right where you can enter a note. To enter a note, simply click the Note Title or Note Textareas and begin typing. When you are finished with your note, you can click the Save icon that appears to the left in the top bar. This button appears as soon as you have satisfied the requirements of a valid note (a note requires title and text). Upon a successful save, you will see your note populate in the left column. You can click this or any other note in this column and the full note info will appear in the space to the right. You are able to enter as many notes as you desire.

Enjoy!
