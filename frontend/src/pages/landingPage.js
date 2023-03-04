import React from 'react';
import ReactDOM from 'react-dom/client';
import Typography from '@mui/material/Typography';
import './style.css';
import { Button, ButtonGroup } from '@mui/material';
import Stack from '@mui/material/Stack';
import ActionCard from '../components/card'
import background from "../images/background.png";
import Log from '../pages/LoginPage.js'

const root = ReactDOM.createRoot(document.getElementById('root'));


export function LandingPage() {
    return (
        <div className='LandingPage' style={{backgroundImage: `url(${background})`, 
                                            backgroundSize: 'fit',
                                            height: "120vh"}}>
            <div className='heading'>
                <Typography style= {{color: 'white'}} variant="h4" component="h4">
                    UnStarve
                </Typography>
                <Typography style= {{color: 'white'}} variant="h6" component="h6">
                    No more starving from indecisiveness
                </Typography>
                <Button variant="outlined" size="medium" style={{ borderRadius: 20, top:-70, left: 600, color: 'white', borderColor: 'white'}}
                    onClick = {(Log)}
                >
                    Log back in
                </Button>
            </div>
            <div className='box'>
                <div className='textMessages'>
                    <div className='msg' style={{ height: '42px', order: 0 }}>Hey food aficionado 👋, what’s your craving for today!</div>
                    <div className='msg' style={{ height: '64px', order: 1 }}>Help me out, tell me a few things about you, and I’ll find th best places to eat around you</div>
                    <div className='msg' style={{ height: '306px', order: 2 }}>
                        <div className='ques'>
                            How far do you want to travel?
                            <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                                <Button style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20, color: 'black', borderColor: 'black'}}>Close-by</Button>
                                <Button style= {{color: 'black', borderColor: 'black'}}>Lil further</Button>
                                <Button style= {{color: 'black', borderColor: 'black'}}>Ready to travel</Button>
                                <Button style= {{color: 'black', borderColor: 'black'}}>Very Far</Button>
                                <Button style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20, color: 'black', borderColor: 'black'}}>Earth</Button>
                            </ButtonGroup>
                        </div>
                        <div className='ques'>
                            What type of cuisines do you like
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }}>Indian</Button>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }}>Italian</Button>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }}>Mexican</Button>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }}>Afghani</Button>
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }}>Mughlai</Button>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }}>Lebanese</Button>
                                <Button variant="outlined" size="small" style={{ borderRadius: 20, color: 'black', borderColor: 'black' }}>Greek</Button>
                            </Stack>
                        </div>
                        <div style={{ paddingTop: 30 }} className='ques'>
                            How much do you plan on spending?
                            <ButtonGroup size="medium" variant="outlined" aria-label="outlined button group">
                                <Button style={{ borderTopLeftRadius: 20, borderBottomLeftRadius: 20, color: 'black', borderColor: 'black' }}>200</Button>
                                <Button style= {{color: 'black', borderColor: 'black'}}>200-500</Button>
                                <Button style= {{color: 'black', borderColor: 'black'}}>500-1000</Button>
                                <Button style= {{color: 'black', borderColor: 'black'}}>1000-2000</Button>
                                <Button style={{ borderTopRightRadius: 20, borderBottomRightRadius: 20, color: 'black', borderColor: 'black' }}>2000+</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                    <div className='msg' style={{ height: '64px', order: 3 }}>
                        Okay, so you like a close-by restaurant with Indian cuisine which is moderately expensive.
                    </div>
                    <div className='msg' style={{ height: '42px', order: 4 }}>
                        Here are some personalised suggestions for you:
                    </div>
                    <div className='msg' style={{ height: '42px', order: 4 }}>
                        <ActionCard />
                    </div>
                </div>
            </div>
            
        </div>
    );
}