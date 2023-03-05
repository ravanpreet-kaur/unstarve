const { NLP } = require("../helper/cohere");

async function getSuggestion(req , res){
    const ans = await NLP(req.params.prompt);
    console.log(ans , req.params.prompt)
    res.status(201).json(ans)
}
module.exports = {getSuggestion}