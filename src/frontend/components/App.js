/* https://youtu.be/Q_cxytZZdnc?t=4469  */

import { useState } from "react";
import { ethers } from "ethers";
import { 
    Link,
    BrowserRouter,
    Routes,
    Route
 } from "react-router-dom";
import { 
    Spinner,
    Navbar,
    Nav,
    Button,
    Container
 } from "react-bootstrap";
import SmartContractAddress from '../contractsData/MidnightOwl-address.json';
import SmartContractAbi from '../contractsData/MidnightOwl.json';
import './App.css';
import logo from "./logo.png";

// react page components
import Home from "./Home.js";


function App() {
    //   __ stateful vars (global scope) ___
    const [account, setAccount] = useState(null)  // store blkchain-node accounts
    // eslint-disable-next-line
    const [contract, setContract] = useState({})  // store smart contract
    const [loadingStatus, setLoadingStatus] = useState(true) // set loading status true
    // get smart contract
    const loadContract = async (signer) => {
      const curr_contract = new ethers.Contract(SmartContractAddress.address,
                                                SmartContractAbi.abi,
                                                signer)  // get deployed smart contract
      setContract(curr_contract) // store in state_var 'contract'
      setLoadingStatus(false) // done loading; set to false
    }
    const web3Handler = async () => {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts'}) // get blkchain node accts
      setAccount(accounts[0])   //   set state_var to 1st node acct in list (currently connnected)
      const provider = new ethers.providers.Web3Provider(window.ethereum) // Get web3 provider from metamask
      const signer = provider.getSigner()   // Get the signer
      loadContract(signer)
    }
    return (
      <BrowserRouter>
        <div className="App">
          <>
            <Navbar expand="lg" bg="secondary" variant="dark">
              <Container>
                <Navbar.Brand href="/">
                  <img src={logo} width="40" height="40" className="" alt="" />
                  &nbsp; Midnight Owl
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/my-tokens">My Tokens</Nav.Link>
                    <Nav.Link as={Link} to="/my-resales">My Resales</Nav.Link>
                  </Nav>
                  <Nav>
                    {account ? (
                      <Nav.Link
                        href={`https://etherscan.io/address/${account}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className="button nav-button btn-sm mx-4"> 
                        <Button variant="outline-light">
                          {account.slice(0,5) + '...' + account.slice(38,42)}
                        </Button>
                      </Nav.Link>
                    ) : ( 
                      <Button onClick={web3Handler} variant="outline-light">
                        Connect Wallet
                      </Button> 
                    )}
                  </Nav> 
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
          <div>
            {loadingStatus ? (
              <div style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:'80vh'}}>
                  <Spinner animation="border" style={{ display:'flex'}} />
                  <p className="mx-3 my-0">Awaiting Metamask connection... </p>
              </div>
            ) : ( 
              <Routes>
                <Route path='/' element={
                  <Home contract={contract} />
                } />
                <Route path='/my-tokens' />
                <Route path='/my-resales' />
              </Routes>
            )}
          </div>
        </div>
      </BrowserRouter>
    );
}
export default App;