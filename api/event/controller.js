const mongoose = require('mongoose');
const Event = require('./model');
const asyncHandler = require("../../middleware/async");

const getAllEvents = asyncHandler(async (req,res) => {
    await Event.find({})
                .exec(function(err,data) {
                    if(err){
                        res.sendStatus(500).send(JSON.stringify({
                            "error":"Something went wrong on our side!"
                        },null,4));
                    } else {
                        res.header("Content-Type",'application/json');
                        res.send(JSON.stringify({
                            "data": data,
                            "source":"server"
                        }, null, 4));
                    }
                });
})

module.exports = {
    getAllEvents,
}