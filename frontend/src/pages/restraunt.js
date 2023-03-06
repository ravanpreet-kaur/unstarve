import Typography from '@mui/material/Typography';
import './style.css';
import { Button, ButtonGroup } from '@mui/material';
import Stack from '@mui/material/Stack';
import ActionCard from '../components/card'
import background from "../images/background.png";
<<<<<<< HEAD
import { useState , useEffect } from 'react';
export function Restraunt() {
    const [rdata , setRdata] = useState(null)
    const fetchRdata = async () => {
    try {
        const response = await fetch('localhost:8080/restaurants');
        const data = await response.json();
        setRdata(data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    };

    useEffect(() => {
    fetchRdata();
    }, [])

    
=======
import {OrderFood} from "./orderFood"
import { useState } from 'react';

export function Restraunt() {

    const [restaurantName, setrestrauntName] = useState("Chillis")

    function menu() {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        setrestrauntName()
        root.render(
        <React.StrictMode>
            <OrderFood />
         </React.StrictMode>
);
    }


    
    const data = [
        {
            restrauntName: 'Indo Cafe',
            distance: 50,
            price: 2000
        },
        {
            restrauntName: 'Nandos',
            distance: 20,
            price: 200
        },
        {
            restrauntName: 'Starbucks',
            distance: 50,
            price: 4000
        },
        {
            restrauntName: 'CCD',
            distance: 20,
            price: 500
        },
        {
            restrauntName: 'KFC',
            distance: 80,
            price: 500
        },
        {
            restrauntName: 'Big Chill',
            distance: 100,
            price: 4000
        },
        {
            restrauntName: 'Noryak',
            distance: 30,
            price: 400
        },
        {
            restrauntName: 'Burger King',
            distance: 30,
            price: 600
        },
        {
            restrauntName: 'Aryan',
            distance: 10,
            price: 3000
        },
        {
            restrauntName: 'Chillis',
            distance: 40,
            price: 800
        },
    ]
>>>>>>> 6efa2c09cd271b1e086b276a2c4601804df7899c
    return (
        <div className='LandingPage' style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'fit',
            height: "100vh"
        }}>
            <div className='heading'>
                <Typography style={{ color: 'white' }} variant="h4" component="h4">
                    UnStarve
                </Typography>
                <Typography style={{ color: 'white' }} variant="h6" component="h6">
                    No more starving from indecisiveness
                </Typography>
                {/* <Button variant="outlined" size="medium" style={{ borderRadius: 20, top:-70, left: 600, color: 'white', borderColor: 'white' }}>Log back in</Button> */}
            </div>
            <div className='box' style={{ overflow: "auto" }}>
                <div className='textMessages'>
                    <div className='msg' style={{ height: '64px', order: 0 }}>Okay, so you like a close-by restaurant with Indian cuisine which is moderately expensive.</div>
                    <div className='msg' style={{ height: '42px', order: 1 }}>Here are some personalised suggestions for you: </div>
                    <div className='card-container' style={{order: 2 }}>
<<<<<<< HEAD
                        {rdata.map((i, index) => (
                            <ActionCard restrauntName={i.name} distance={i.cuisine} price={i.price} />
=======
                        {data.map((i, index) => (
                            <span onClick={(menu)} onChange>
                                <ActionCard restrauntName={i.restrauntName} distance={i.distance} price={i.price} />
                            </span>
>>>>>>> 6efa2c09cd271b1e086b276a2c4601804df7899c
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}