const accountSid = 'ACbf2a17c5effcd24c07a442790574839b'; // Your Account SID from www.twilio.com/console
const authToken = '4233f07a44f84ad65709f828850df1c6'; // Your Auth Token from www.twilio.com/console
const client = require('twilio')(accountSid, authToken);


sendMsg('+918822647991')

function sendMsg(phoneNo)
{
    client.messages
    .create({
    body: 'Thanks for booking with unStarve. Your bookingID is {bookingID}',
    to: phoneNo, // Text this number
    from: '+15672921960', // From a valid Twilio number
    }).then((message) => console.log(message.sid));
}

module.exports = {sendMsg}