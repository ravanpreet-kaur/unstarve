import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


export default function MenuCard(props) {
    const [restrauntName, setrestrauntName] = useState(props.restrauntName);
    function returnRestrauntName(e) {
        setrestrauntName(props.restrauntName);
        console.log(restrauntName);
    }
    return (
        <Container>
            <Box className="foodItem" />
                <img src={require('../images/balloon.jpg')} style={{ height: 40 }} />
                
        </Container>
    );
}
