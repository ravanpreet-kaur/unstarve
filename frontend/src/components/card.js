import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';

export default function ActionCard(props) {
    const [restrauntName, setrestrauntName] = useState(props.restrauntName);
    function returnRestrauntName(e){
        setrestrauntName(props.restrauntName);
        console.log(restrauntName);
    }
    return (
        <Card sx={{ maxWidth: 150 }} style={{borderRadius: 20}} onClick={returnRestrauntName}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={require('../images/balloon.jpg')}
                />
                <CardContent>
                    <Typography style={{textAlign: 'center'}} variant="body1">
                        {props.restrauntName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        &nbsp;<i class="fa fa-map-marker" aria-hidden="true" />
                        &nbsp;&nbsp;{props.distance}km
                        <br />
                        <i class="fa fa-money" aria-hidden="true" />
                        &nbsp;Rs.{props.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
