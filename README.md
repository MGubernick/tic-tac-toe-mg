# Project 1: Tic-Tac-Toe

The first project for our course is to build a tic-tac-toe game.

## Important Links & Resources Used:

**Specific Links**
[game project api repo](https://git.generalassemb.ly/mgubernick/game-project-api)
[game docs](https://git.generalassemb.ly/mgubernick/game-project-api/blob/master/docs/game.md#update-request-body)
[authentication docs](https://git.generalassemb.ly/mgubernick/game-project-api/blob/master/docs/user.md)
[tic-tac-toe Wiki](https://en.wikipedia.org/wiki/Tic-tac-toe)

**Website Resources**
- w3schools.com
- developer.mozilla.org
- stackOverflow.com

**Other Resources**
- Classmate collabs


## Planning and Story: Development Process and Problem-Solving Strategy:
After reading all of the provided repos I began my planning with draing out the wireframe.  This gave me a gneral idea as to what elements I will need to create in order to build all of the required functions. After drawing the wireframe, the next preperation step was making a copy of the suggested schedule so that I could check off each step as I completed it, ensuring that I complete each requirement along the way.  Once I started working on the project, I used the same workflow as the checklist from the previous week's lessons: First, I chcked my schedule to see which function I was building. Second, I created a branch in my terminal to work on this specific function. Then, I wrote some HTML to create the needed elements and also wrote a curl script (based on the API documentaion provided) to test the API and make sure I was getting the response that is expected. Once I knew the curl scrip was working, the next steps were createing an event listener in my app.js file, an event handler function in my events.js file, an ajax call function to communicate with the API in api.js as well as a couple success and failure functions in the ui.js files.
I repeated these steps while creating each of the authentication functions: sign-up, sign-in, change-password and sign-out.
After creating each of the authentication functions, I moved on to creating the game.  The first part of the game creation process was creating a new game button and I accomplished this by following the same steps that I did while creating the previous functions.  Then, I referencd our bootstrap lesson from the week before and I used bootstrap to create my game board out of <div>s and bootstrap classes.
Moving on to the game specific functions, such as checking to see if spaces were empty before placing a marker or alternating between 'X' and 'O', I found a couple of these functions pretty challenging.  This allowed for a lot of great collaborating opportunities   While developing these functions, I ran into a variety of roadblocks, errors and issues.  For these, my **problem-solving strategy** generally went like this: First, I would spend a little bit of time trying to figure our how to solve the problem on my own, working through any ideas that I could come up with right away.  Then, I would start to reference back to our lesson repos and use google as needed to remember how to utilize different things.  At this point I would also be messaging fellow classmates in slack and talking to them in breakout groups on zoom and collaborating to brainstorm ideas.  After ~20minutes of brainstorming, if I was still stuck with no progress, I would submit an issue to the issues page on the game repo.  It was great being able to work with classmates to be able to solve some of the harder problems, the feeling that you get when you succeed is fantastic.
All of the game functions (clicking on the board and placing markers, determining the win/tie, starting new game, disabling the game board when a game ends/enabling it on new game, getting the total number of games a particular user has played and all messaging that correlates) were complete using the same steps as the authentication process.
As far as the CSS and Styling features, each night of the week, after I was done working on whatever function I finished the day with, I would relax and write some CSS and do a little styling along the way.  This worked out well because I enjoy seeing the style and design features develop in tandem to playing features.  It creates a sense of completion after each step which I really enjoy.
After I completed the last required feature, I went back and re-tested EVERYTHING from start to finish.  I wanted to make sure everything worked as it is intended to.  As I tested, I caught a couple small bugs (such as things not posting messages when they were supposed to) and fixed those along the way.  After I finished testing the game myself, I had a couple of my friends play with it as well and provide me with a ideas on extra features they thought might be nice to see.  Based on this feedback, I created a couple additional features.  These include buttons that will allow you to pick if you start the game on 'X' or 'O' (which also go away after you start playing), having a specific color for each marker to differentiate easier as well as a link that wil take you to a how to play tic-tac-toe wiki page if you don't know how to play already.  Towards the end of the weekend I was beginnning to play with the idea adding a couple media queries to my css to allow for a nicer user experience on a mobile device.  However, I was running a little low on time and was not able to complete this additional feature.  I plan to come back to it.
The last part of my developement process was going through and cleaning up my code by removing console.log()s and cleaning up spacing and stuff witing my code to make for easier readability. After this was finshed up, I proceeded create and write up this README document.


## User Stories:
- As a player, I want to be able to click various buttons and see my symbol printed there so that I know if I win the game.
- As a new user, I want to be able to create an account by entering my username and password so that I can participate in the game.
- As a current user, I want to be able to sign in and out of the game so that I don't have to stay logged in all the time.
- As a current player, I want to be able to click the 'start game' button
- As a currnt player I want to see the game board clear so that I can play a fresh game.
- As a current player, I want to be able to see some text that indicates when I have won the game so that I can celebrate.

## Technologies Used:
- HTML/CSS
- Bootstrap
- Javascript
- jQuery
- AJAX
- Game API
- Google

## Unsolved Problems:
- I (started to work on and) would like to still finsh some media queries in my css to style the mobile screen view
- I would like to eventually create a feature to allow alternate symbols to be chosen and used in the game

## Wireframes
[Wireframe v1](https://media.git.generalassemb.ly/user/32368/files/e3ea6400-392e-11eb-9259-b02d3a24b21c)
