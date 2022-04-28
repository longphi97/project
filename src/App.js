import './App.css';

function App() {
  return (
    <div className="App">
    <h1 className="title">This is Tao Page</h1>
    <h2 className='title'>Login Account</h2>
      <form className='form'>
        <p>Username:
          <input type="text" name="username" size="15" 
            maxlength="30" />
        </p>
        <p>Password:
          <input type="password" name="password" size="15"
            maxlength="30" />
        </p>
      </form>
      <button className="btn">Register</button>
    </div>
  );
}

export default App;
