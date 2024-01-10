import './App.css';

function App() {
  return (
    <div className="App">
      My todo application
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

function FirstComponent(){
  return (
    <div className='FirstComponent'>First Component</div>
  );
}

function SecondComponent(){
  return (
    <div className='SecondComponent'>Second Component</div>
  );
}

export default App;
