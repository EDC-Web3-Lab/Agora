import { useState, useEffect, useRef } from "react";
import { ethers } from "hardhat";
import Identicon from 'identicon.js'
import { ButtonGroup, Button, Card } from "react-bootstrap";

/* Home page component  (pass in smart contract) */
const Home = ({contract}) => {
    const [loading, setLoading] = useState(true)
    const [marketItems, setMarketItems]  = useState(null)
    const loadMarketItems = async () => {
        // get all unsold items
        const results = await contract.getAllUnsold()
    }
    return ;
}
export default Home