import "./App.css";

function App() {
  <title>kung fu</title>;
  const handleSubmit = (e) => {
    alert("hello");
  };
  return (
    <div className="App">
      <h1 className="title">This is LongPhiLong Page</h1>
      <h2 className="title">Login Account</h2>
      <a href="https://www.petrolimex.com.vn/ndi/thong-cao-bao-chi/petrolimex-dieu-chinh-gia-xang-dau-tu-15-gio-00-ngay-21-4-2022.html">
        đừng bấm vào
      </a>
      ;
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
        Login
      </button>
    </div>
  );
}

export default App;
