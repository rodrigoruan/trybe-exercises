// 1°
const JSX = <div></div>;

// 2°
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>My name is Rodrigo</p>
    <ul>
      <li>And i have</li>
      <li>20</li>
      <li>Years Old</li>
    </ul>
  </div>
);

// 3°
const JSX = (
  <div>
    <h1>{/*Olá mundo*/}This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

//4°
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Change code below this line
ReactDOM.render(JSX, document.querySelector('#challenge-node'));

// 5°
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

// 6°
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

// 7°
const MyComponent = () => <div>Hello World</div>;

// 8°
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
}

// 9°
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}
