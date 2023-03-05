const accountSid = 'ACbf2a17c5effcd24c07a442790574839b';
const authToken = '1f8084c228df37d1bc0d87fb7d63241d';


function twilioCall(name, bookingID, price , ph_number)
{
    bodyString = "Hello " + name + ", Thanks for using unStarve!! Your total Bill for booking ID: " + bookingID + " is " + price + "Rs"
    const client = require('twilio')(accountSid, authToken);
    client.messages
    .create({
        body: bodyString,
        to: ph_number, // Text this number
        from: '+15672921960', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}
module.exports = {twilioCall}