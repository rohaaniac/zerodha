
// .env value goes to system process
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const {HoldingsModel} = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// process.env.PORT -- reading the port number where it is deployed given by cloud service provider
const PORT = process.env.PORT || 3002;
// taking db url
const uri = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(bodyParser.json());


// added dummy data for addHoldings & addPositions
// app.get('/addHoldings', (req,res)=>{
//     let tempHoldings = [
//         {
//           product: "CNC",
//           name: "EVEREADY",
//           qty: 2,
//           avg: 316.27,
//           price: 312.35,
//           net: "+0.58%",
//           day: "-1.24%",
//           isLoss: true,
//         },
//         {
//           product: "CNC",
//           name: "JUBLFOOD",
//           qty: 1,
//           avg: 3124.75,
//           price: 3082.65,
//           net: "+10.04%",
//           day: "-1.35%",
//           isLoss: true,
//         },
//       ];
        
    


//       tempHoldings.forEach((item)=>{
//         let newHolding = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price:item.price,
//             net: item.net,
//             day: item.day,
//             isLoss:item.isLoss,
//         });
//         newHolding.save();
//       })
//       res.send("DONE");
// }) 

app.get("/allHoldings", async(req,res)=>{
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get("/allPositions", async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.post("/newOrder", async(req,res)=>{
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,

  });
  newOrder.save();

  res.send("Order saved");
});


app.listen(3002, () => {
  console.log("app started :]");
  mongoose.connect(uri);
  console.log("DB connected :))");
});
