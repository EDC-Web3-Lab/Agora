
import logo from './logo.png';
import './App.css';
 
function App() {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a
          className="navbar-brand col-sm-3 col-md-2 ms-3"
          href="http://www.github.com/ed-chin-git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agora
        </a>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mx-auto mt-5">
              <a
                href="http://www.github.com/ed-chin-git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} className="App-logo" alt="logo"/>
              </a>
              <h1 className= "mt-5">NFT Market Place</h1>
              <p>
                Edit <code>src/frontend/components/App.js</code> and save to reload.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
