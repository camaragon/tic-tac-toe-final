# Tic Tac Toe Final
​​​
It's time to get political! Play Tic Tac Toe as either a Republican or a Democrat! No need to pick a side though because you get to play as both in this! The blue or Democrat player will go first and the first to three in a row wins! If no one can get three in a row before the spaces are gone then it's a tie! Every win is tracked for both sides aand they stay upon page refresh. No need to get upset because both political parties are winners in this game!

## Goals 
To create all of the functionality in the Data Model and start there first. I wanted to be able to play the game in the console first and I did which was awesome! I was able to do this by using only classes and one global variable within main. I wanted to understand why the Data Model is the source of truth for all functionality. I wanted to create a clean game of Tic Tac Toe and truly understand how the Data Model and DOM interact. Learn more about CSS and HTML styling and to keep it clean and follow style guides. I feel like this project was a huge learning opportunity and a success for me!

![Example](https://i.gyazo.com/b113d6d94cbbfddbc3ac5e73b62a19b9.jpg)

## Technology Used:
- *JavaScript*
- *HTML*
- *CSS*
- *WAVE*
- *Chrome Developer Tools*
- *GitHub*
- *Grid*
- *Flexbox*

## Code Architecture 

This gives an overview and slight explanation of the files used to construct this Tic Tac Toe webpage: 

- `main.js` - Deals with all of the DOM manipulation and is what allows the functionality on the webpage. Every function inside accesses methods being called in the Data Model. The functions alter the DOM based on changes happening within the Data Model. It also contains query selectors accessing the elements inside the DOM and only one global variable which is instantiates the `Game` class.
- `player.js` - Contains the `Player` class which holds the name, id, token, moves, wins, and win state properties of the players. There are also two methods within that allows the wins property to be saved and retrieved from local storage so they persist upon page refresh.
- `game.js` - Contains the `Game` class which holds two new instantiations of the `Player` class, playerTurn, moveCount, draw, gameboard and winConditions properties. The gameboard property is assigned to an array of integers 1-9 to allow for 9 indexes total, replicating the tic tac toe board. This is where the Data Model takes place and is the one source of truth for the functioanlity of the program. It works with the player instantiations to is altered based on user's input. It contains several methods, but the `placeToken()` is what inserts the corresponding players token into the gameboard array. The `checkWinOrDraw()` loops through an array of each player's previous moves and compares them to the winConditions to see if it's a win or a draw. When a win or draw has occured a timeout function is called in `main.js` that reloads the page and creates a new instantiation of the `Game` class.
- `styles.css` & `html.index` - Builds each element on the DOM and displays it on the webpage. Also used to give styling to each of the elements.

## Challenges
- Very difficult to conceptualize starting only in the Data Model at first with the class files.
- Having only one global variable was difficult to understand.
- Formatting the tic tac toe board was very difficult to do using Grid. 
- Connecting the Data Model and DOM.

## Wins
- I learned exactly how the Data Model should be the one source of truth for all functionality.
- I leanred a lot more about Grid.
- My HTML and CSS felt very organized and clean, as I followed the styling guide very closely.
- Using only one global variable.
- I think the look of my comp came out really nice!
- Learned a lot about Class files and how they interact with the rest of javascript functionality.

## Contributions
The contributor of this project is Cameron Aragon.

### Contact
Please follow me on github to reach out about this or any other projects.
- Cameron Aragon @caragon4695
