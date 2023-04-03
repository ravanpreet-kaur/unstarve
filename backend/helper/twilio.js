const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO;


function twilioCall(name, bookingID, price , ph_number){
    bodyString = "Hello " + name + ", Thanks for using unStarve!! Your total Bill for booking ID: " + bookingID + " is " + price + "Rs"
    const client = require('twilio')(accountSid, authToken);
    client.messages
    .create({
        body: bodyString,
        to: ph_number, // Text this number
        from: process.env.ARSHDEEP_NUMBER, // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}
module.exports = {twilioCall}