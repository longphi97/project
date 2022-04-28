import "./App.css";

function App() {
  const handleSubmit = () => {
    alert("hello");
  };
  return (
    <div className="App">

    <h1 className="title">This is Tao Page 1234567</h1>
    <h2 className='title'>Login Account</h2>
      <form className='form'>
        <p>Username:
          <input type="text" name="username" size="15" 
            maxlength="30" />

      <h1 className="title">This is Tao Page</h1>
      <h2 className="title">Login Account</h2>
      <a href="https://www.petrolimex.com.vn/ndi/thong-cao-bao-chi/petrolimex-dieu-chinh-gia-xang-dau-tu-15-gio-00-ngay-21-4-2022.html">
        Đừng bấm vào
      </a>
      <form className="form">
        <p>
          Username:
          <input type="text" name="username" size="15" maxlength="30" />
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
        Login to Heard Hieu
      </button>
    </div>
  );
}

export default App;
