//  Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method. You'll see that store.dispatch() is called three times in a row, each time directly passing in an action object. Watch the console output between the action dispatches to see the updates take place.

const ADD = 'ADD'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1
    default:
      return state
  }
}

const store = Redux.createStore(reducer)

// Global count variable:
let count = 0

// Change code below this line
store.subscribe(() => (count += 1))
// Change code above this line

store.dispatch({ type: ADD })
store.dispatch({ type: ADD })
store.dispatch({ type: ADD })

console.log(count)
