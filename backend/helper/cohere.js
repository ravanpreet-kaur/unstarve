const cohere = require("cohere-ai");

async function NLP(req , res){
    
        cohere.init("Y1cprOQOpfWkbXd3WUA2cAs92dOpxxXWtSpJfxc3");
        try{
            const generateResponse = await cohere.classify({
                model: "large",
                inputs: [req.body.prompt],
                examples: [{text: "spicy", label: "Buffalo wings"}, {text: "juicy", label: "Buffalo wings"}, {text: "chicken", label: "Buffalo wings"}, {text: "Spicy", label: "Paneer Tikka"},
                {text: "Vegetarian", label: "Paneer Tikka"},{text: "Grilled", label: "Paneer Tikka"},{text: "Cheesy", label: "Baked Pasta"},{text: "Comfort Food", label: "Baked Pasta"},
                {text: "Juicy", label: "Pulled Chicken Burger"},{text: "Cheesy", label: "Pulled Chicken Burger"},{text: "Non Vegetarian", label: "Pulled Chicken Burger"},
                {text: "Grilled", label: "Tandoori Chicken"},{text: "Spicy", label: "Tandoori Chicken"},{text: "Non-Vegetarian", label: "Tandoori Chicken"},
                {text: "Comfort Food", label: "Fish and Chips"},{text: "Non-Vegetarian", label: "Fish and Chips"},{text: "Vegetarian", label: "Falafel Wrap"},
                {text: "Eggs & Juice", label: "Breakfast"},{text: "Toast", label: "Breakfast"},{text: "Spicy", label: "Falafel Wrap"},{text: "Pad Thai", label: "Stir-fried"},
                {text: "Kimchi Fried Rice", label: "Stir-fried"},{text: "Fried Rice", label: "Lunch"},{text: "Pav Bhaji", label: "Lunch"}
            ]});
            index = 0
            maxNum = generateResponse.body.classifications[0].confidence
            for(let l = 0; l < generateResponse.body.classifications.length; ++l)
            {
                if(maxNum < generateResponse.body.classifications[l].confidence)
                {
                    maxNum = generateResponse.body.classifications[l].confidence
                    index = l
                }
            }
            res.status(201).json(generateResponse.body.classifications[index].prediction)
        }
        catch(err){
            console.log(err)
        }   
}
module.exports = {NLP}