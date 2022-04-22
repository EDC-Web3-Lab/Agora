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
    NavBar,
    Nav,
    Button,
    Container
 } from "react-bootstrap";

import logo from "logo.png";
import "./App.css ";

function App() {
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState(null)
    return (
      <BrowserRouter>
        <div className="App">
          <>
            
          </>
        </div>
      </BrowserRouter>
    )
}