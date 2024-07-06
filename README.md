## React Tic-Tac-Toe

We will be focusing on writing React Functional Components, this is the more modern and current standard way of writing React code.

There is an older still used Class based syntax. We recommend to first focus on getting comfortable and master React development with the Functional Syntax then revisit the class syntax at that point when necessary (if working on older code bases).


**in app.js**

Let's render an `h1` inside our App component in App.js

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (<h1> React Tac Toe </h1>);
}

export default App;
```

**NOTE FOR INSTRUCTORS** With React 17 and later importing React is no longer required for components that aren't using any hooks.

When we refresh our view "Hello World" should be replaced with "React Tac Toe".

##### If we've installed React Dev tools, we can go over to the React tab and see our component

![react dev tools](https://i.imgur.com/CxcflPZ.png)


## Making a Component inside another component

According to our mockup, our App will have 4 components
 - header
 - two player components
 - board

With react, we can only render **ONE** component. That component can have numerous components inside of it.

Let's make our header component by doing the following:
- create a "components" folder in "src" to house all our non-App components
- create a file src/components/Header.js

**NOTE** You can write multiple components in one file, but it is convention that each component get its own file in the components folder.

```js

function Header() {
  return (<h1> React Tac Toe </h1>);
}

export default Header;
```

To use this component we need to:
- import it into app
- use it in the JSX of the app component, using components looks a lot like using HTML!

```js
import Header from "./components/Header";
import './App.css';

function App() {
  return (<Header/>);
}

export default App;
```
We still haven't changed how things should look so let's use the dev tools to check everything is in order:

![react dev tools](https://i.imgur.com/ZZ2cteT.png)


Let's make a player scoreboard

- create a new file in "components" called `Player.js`

```js
function Player() {
    return (
        <div>
          <h2>Player </h2>
          <h3>Wins: </h3>
        </div>
      )
  }
  
  export default Player;
```

And have that component render in our app:

```js
import Header from "./components/Header";
import Player from "./components/Player";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Player />
    </div>
  );
}

export default App;
```

Since a main feature of React is reusable components we can just copy our Player again:

```js
import Header from "./components/Header";
import Player from "./components/Player";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Player />
      <Player />
    </div>
  );
}

export default App;
```

![two players](https://i.imgur.com/eUkvjtR.png)


### A Sneak Peak of a Lesson in the Near Future

We know we have a player X and a player O, and we want to be able to customize our components. We can pass custom properties to our Player components, using `props` (short for properties). `props` is a special term in React. Let's see it in action.

Let's make a custom `prop` called `whichPlayer` and pass the appropriate player name

```js
import Header from "./components/Header";
import Player from "./components/Player";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Player whichPlayer='x'/>
      <Player whichPlayer='o'/>
    </div>
  );
}

export default App;
```

Now, we need to access these properties inside our Player component. Our player component is a child of App, and thus has access to props. Don't worry if this doesn't make sense yet. We'll be returning to this concept over and over again and it'll start to come together.

```js
// Props are passed as object argument to our component, so we must define a parameter to receive it
// conventionally the parameter is called props
function Player(props) {
    return (
        <div>
          <h2>Player {props.whichPlayer} </h2>
          <h3>Wins: </h3>
        </div>
      )
  }
  
  export default Player;
```

Now we can see our custom property `whichPlayer` rendering with its value, depending on which component it is:

![Props](https://i.imgur.com/Zieebv4.png)


Let's make one more component for our App, the board:

- make a Board.js in components

```js
function Board(props) {
    return (
        <div>
          the board!
        </div>
      )
  }
  
  export default Board;
```

Don't forget to add the `Board` component in our `App`

```js
import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Player whichPlayer="x" />
      <Player whichPlayer="o" />
      <Board/>
    </div>
  );
}

export default App;
```

### You Do:

On your own, and then we'll review ~ 10 minutes
- make one more component called `Square`, made up of a div, inside the div put an `h4` element, inside the `h4` put some text like the word `square`
- gotcha! divs have a height and width of 0 when they are empty. Be sure to put in an `h4` and some text
- render 9 squares inside the Board
- **Extra** - Read ahead to learn how to incorporate CSS


### CSS & React

Right now we have all the right elements, but we need some style to make it look like a proper tic tac toe game, let's try to make it look like this:

 ![expected final appearance](https://i.imgur.com/gbvCuEY.png)

 We can create as many CSS files as we want in the src folder, and as long as we import the css file in at least one component, then the styles will be applied to our whole project (some people like to make a css file for each component for organization, but let's not). For now let's just focus on using one stylesheet.

 - create src/styles.css
 - import styles.css into App.js

 ```js
 import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";
import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <Player whichPlayer="x" />
      <Player whichPlayer="o" />
      <Board/>
    </div>
  );
}

export default App;
```

Let's add a little starting style to make sure everything is linked correctly

```css
:root {
  --dark-cerulean: #124e78;
  --maastricht-blue: #0b132b;
  --yankees-blue: #1C2541;
  --sea-serpent: #5bc0be;
  --aquamarine: #6fffe9;
  --react: #00d8ff;
}

html {
  background: var(--yankees-blue);
}
body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  color: white;
}

```

Let's add some classes to target parts of our components

**app.js**

Player:

```js

function Player(props) {
    return (
        <div className={props.whichPlayer}>
          <h2>Player {props.whichPlayer} </h2>
          <h3>Wins: </h3>
        </div>
      )
  }
  
  export default Player;

```

Board:

```js
import Square from "./Square"

function Board(props) {
    return (
        <div className="board">
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
          <Square/>
        </div>
      )
  }
  
  export default Board;

```

Square:
```js
function Square(props) {
    return (
        <div>
          <h4>square</h4>
        </div>
      )
  }
  
  export default Square;
```


We can use a combination of flexbox and css grid to complete the look

```css
.container > div {
  display: flex;
  background: var(--yankees-blue);
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 60vh;
  align-items: flex-start;

}

.board {
  flex-basis: 60%;
  display: grid;
  grid-template-columns: 15vw 15vw 15vw;
  grid-template-rows: 15vw 15vw 15vw;
  color: white;
  justify-items: stretch;
  justify-content: center;
}

.board  div {
  display: flex;
  align-items: center;
  border: 3px solid var(--react);
}

h4 {
  text-align: center;
  flex-basis: 100%;
  align-self: center;
}

.X, .O {
  flex-basis: 45%;
  text-align: center;
}

.X {
  color: var(--sea-serpent);
}

.O {
  color: var(--aquamarine);
}
h1 {
  flex-basis: 60%;
  color: var(--react);
  text-align: center;

}
```