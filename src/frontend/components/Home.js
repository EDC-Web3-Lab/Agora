import { useState,
        useEffect,
           useRef } from "react";
import { ethers } from "hardhat";
import Identicon from 'identicon.js'
import { ButtonGroup, Button, Card } from "react-bootstrap";

/* Home page component  (pass in smart contract) */
const Home = ({ contract }) => {

    //  __ stateful vars __
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(null)
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const [marketItems, setMarketItems]  = useState(null)
    const [loading, setLoading] = useState(true)
    const loadMarketItems = async () => {
        // get all unsold items
        const results = await contract.getAllUnsold()
        const marketItems = await Promise.all(results.map( async i => {
            const uri = await contract.tokenURI(i.tokenId) // get uri from contract
            const response = await fetch(uri + ".json")
            const metadata = await response.json()
            const identicon = `data:image/png;base64,${new Identicon(metadata.name + metadata.price, 330).toString()}`
            // and return them
            return ({
                price: i.price,
                itemId: i.tokenId,
                name: metadata.name,
                audio: metadata.audio,
                identicon
            })
        }))
        setMarketItems(marketItems) // init the item list
        setLoading(false)
    }

    /* func: buyMarketItem */
    function buyMarketItem = async (item) => {
        await(await contract.buyToken(item.itemId, { value: item.price })).wait()
        loadMarketItems()
    }

    /* ___ effects ___  
    callback executes when this component updates 
    (each time  the stateful vars change or component melts) */ 
    useEffect( () => {
        !marketItems && loadMarketItems()   // only load when component mounts (if value is null)
    })

    /* ___ HTML ___    */
    if (loading) return (
        <main style={{ padding: "1rem 0"}}>
            <h2>Loading ....</h2>
        </main>
    );
    return (
        // ___ home page ___
        <div className="container-fluid mt-5">
            {marketItems.length > 0 ?
                <div className="row">

                </div>
            : (
                <main style={{ padding: "1rem 0"}}>
                    <h2>No song listings</h2>
                </main>
            )}
        </div>
    );
}

export default Home

// https://youtu.be/Q_cxytZZdnc?t=4994