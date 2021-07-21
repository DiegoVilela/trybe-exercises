import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Study English', 'Study React', 'Go out for a walk', 'Rest'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map(stask => Task(stask)) }</ul>
    );
  }
}

export default App;
