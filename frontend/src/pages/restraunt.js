import Typography from '@mui/material/Typography';
import './style.css';
import { Button, ButtonGroup } from '@mui/material';
import Stack from '@mui/material/Stack';
import ActionCard from '../components/card'
import background from "../images/background.png";
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
                        {rdata.map((i, index) => (
                            <ActionCard restrauntName={i.name} distance={i.cuisine} price={i.price} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}