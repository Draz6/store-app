import React, { useEffect, useState } from "react";
import Card from "./Card";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from 'react-router-dom'
import PopUpCard from './PopUpCard'
import loading from "../img/loading.gif"
import Home from "./Home";
import { getData } from "../api/api";
import '../styles/Collection.css'


// get data by api
export default function Collection() {
    const [collection, setCollection] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( () => {
   async function getDataFromApi() {
    try {
         const collectionData = await getData()
         setCollection(collectionData);
         setIsLoading(false);
         
    } catch (error) {
        console.log(error);
    }
    }
    getDataFromApi()}, []);

   {/*   <div id="logControl"> {true ? <div>
               <button>Log out</button>
               </div> : 'you need to login'}</div>*/}
    return (
        <div id="card">
             <div id="sideBar"><Link to="/LogIn">
                <button className="logOut"><PersonIcon className="logOutIcon" /> Log out  </button>
            </Link>
            </div><Home /> 
            <div id='containerDiv'>
                {isLoading ? (<div className="loading"><img src={loading} alt=""/>Loading…</div>) : ( 
                <div> {collection.map(item => (
                    <div id="cardsDiv">
                        <Card name={item.name}  pic={item.imgURL} price={item.price + " $"}
                        brand={item.company} category={item.category} model={item.model}/>
                        <PopUpCard  pic={item.imgURL} name={item.name} />
                    </div>))}
                </div>)}
            </div>
        </div>
    )
}