import React from 'react';

//  ex 2

// const Task = (value) => {
//   return <li>{value}</li>;
// };

// function App() {
//   let arr = ['Fazer café', 'Estudar na trybe', 'Aprende React'];
//   return (
//     <>
//       <div>{arr.map((elemento) => Task(elemento))}</div>
//     </>
//   );
// }

// export default App;

// ex 4

function Card(props) {
  return (
    <div className='card'>
      <img
        className='card-img-top'
        src={props.featureImage}
        alt={props.title}
      />
      <div className='card-body'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text'>{props.description}</p>
        <a href={props.link} className='btn btn-primary'>
          Learn more
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='row'>
      <div className='col-sm-4'>
        <Card
          featureImage='https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png'
          title='How To Make Interactive ReactJS Form'
          description="Let's write some interactive form with React"
          link='https://sebhastian.com/interactive-react-form'
        />
      </div>
      <div className='col-sm-4'>
        <Card
          featureImage='https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png'
          title='Babelify your JavaScript code'
          description='Babel make JavaScript code browser-compatible.'
          link='https://sebhastian.com/babel-guide'
        />
      </div>
      <div className='col-sm-4'>
        <Card
          featureImage='https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png'
          title='JavaScript Basics Before You Learn React'
          description='Learn the prerequisites of learning React fast'
          link='https://sebhastian.com/js-before-react'
        />
      </div>
      <div className='col-sm-4'>
        <Card
          featureImage='https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png'
          title='How To Make Interactive ReactJS Form'
          description="Let's write some interactive form with React"
          link='https://sebhastian.com/interactive-react-form'
        />
      </div>
      <div className='col-sm-4'>
        <Card
          featureImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnMN_53Uo8psedFKMB9zbejdIzAY8vTEv6XQ&usqp=CAU'
          title='Acess React documentation'
          description="Let's understand React!"
          link='https://react.com'
        />
      </div>
      <div className='col-sm-4'>
        <Card
          featureImage='https://lh3.googleusercontent.com/GTekXBfXWtpit-vfwBNvbN5kGt0mfD16P6GpTDMlIsQjLMzKWNywgVuJg69M4SDJY5UT'
          title="Let's learn? acess Trybe course"
          description='Best course ever #goTrybe'
          link='https://betrybe.com'
        />
      </div>
    </div>
  );
}

export default App;
