import Typography from '@mui/material/Typography';
import './style.css';
import { Button, ButtonGroup } from '@mui/material';
import Stack from '@mui/material/Stack';
import ActionCard from '../components/card'
import background from "../images/background.png";
import MenuCard from '../components/menuCard';

export function OrderFood() {
    const data = [
        {
            food: 'pizza',
            price: 200
        },
        {
            food: 'pizza',
            price: 200
        },
        {
            food: 'pizza',
            price: 200
        },
        {
            food: 'pizza',
            price: 200
        },
    ]
    return (
        <div className='LandingPage' style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'fit',
            height: "100vh"
        }}>
            <div className='heading'>
                <Typography style={{ color: 'white' }} variant="h4" component="h4">
                    Indo Cafe
                </Typography>
                <Typography style={{ color: 'white' }} variant="h6" component="h6">
                    Powered by UnStarve
                </Typography>
                {/* <Button variant="outlined" size="medium" style={{ borderRadius: 20, top:-70, left: 600, color: 'white', borderColor: 'white' }}>Log back in</Button> */}
            </div>
            <div className='box' style={{ overflow: "auto" }}>
                <div className='textMessages'>
                    <div className='msg' style={{ height: '42px', order: 0 }}>Hello Pixelate, How can we serve you today?</div>
                    <div className='msg' style={{ height: '42px', order: 1 }}>Let’s see what we have for you..</div>
                    <div className='msg' style={{ height: '64px', order: 2 }}>Based on your order history i think you’ll like, Some Dal Baati with Mild spices.</div>
                    <div className='msg' style={{ height: '42px', order: 3 }}>Here are some personalised suggestions for you: </div>

                    {data.map((i, index) => (
                        <>
                            <div className='foodItem' style={{ order: 4, height: '45px', flexDirection: 'row', justifyContent: 'space-between' }} >
                                <img src={require('../images/balloon.jpg')} style={{ height: 40, borderRadius: 40, alignSelf: 'center', left: 0}} />
                                <Typography variant="body1">
                                    {i.food}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ alignSelf: 'flex-end', textAlign: "center", }}>
                                    &nbsp;Rs.{i.price}
                                </Typography>
                            </div>
                        </>
                    ))}

                    <div className='msg' style={{ height: '70px', order: 5, width: '100px' }}>Full Menu <br /> Bestsellers</div>

                    {data.map((i, index) => (
                        <>
                            <div className='foodItem' style={{ order: 6, height: '45px', flexDirection: 'row', justifyContent: 'space-between' }} >
                                <img src={require('../images/balloon.jpg')} style={{ height: 40, borderRadius: 40, alignSelf: 'center', left: 0}} />
                                <Typography variant="body1">
                                    {i.food}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ alignSelf: 'flex-end', textAlign: "center", }}>
                                    &nbsp;Rs.{i.price}
                                </Typography>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}