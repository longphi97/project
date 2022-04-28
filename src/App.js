import "./App.css";

function App() {
  const handleSubmit = () => {
    alert("hello");
  };
  return (
    <div className="App">
    <h1 className="title">This is asdasdasdasdasdas Page</h1>
    <h2 className='title'>Login</h2>
      <form className='form'>
        <p>Username:
          <input type="text" name="username" size="15" 
            maxlength="30" />
        </p>
        <p>
          Password:
          <input type="password" name="password" size="15" maxlength="30" />
        </p>
      </form>
      <button
        style={{ textAlight: "center" }}
        className="btn"
        type="submit"
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
}

export default App;
