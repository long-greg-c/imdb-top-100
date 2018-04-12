
# Top 100 Movie Game
A research project to become familiar with React and Redux

## Live Site

https://long-greg-c.github.io/imdb-top-100/

## Project details

The project includes two working branches:
- Redux 
    Uses redux and redux logic as a state container. Current live site is from branch Redux.
- Non-Redux
    State is maintained by the react components.

Project template/scaffolding by [create-react-app.](https://github.com/facebook/create-react-app)

UI Components from [Semantic UI React](https://react.semantic-ui.com)


### Redux Middleware

Uses [Redux Thunk](https://github.com/gaearon/redux-thunk) middleware to allow dispatching actions from within action creators.

Uses [Redux Promise](https://github.com/redux-utilities/redux-promise), when an action has a payload that is a promise the action will not be dispatched until 
the promise returns.

### State Persistence

Uses [redux-persist](https://github.com/rt2zz/redux-persist) to save the state container to the browser local storage. 
When the app is refreshed or reopened the state container is re-hydrated from local storage.

## Running

1. Clone project
2. Run `npm install`
3. Run `npm start`
4. Site is accessible from `http://localhost:3000`
