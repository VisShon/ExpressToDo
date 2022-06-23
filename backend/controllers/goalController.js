const asyncHandler = require('express-async-handler');


//functions
const getGoals = asyncHandler(async (req,res) =>{
    res.status(200).json({messgae: 'get goals'});
})
const setGoal = asyncHandler(async (req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please enter text');
    }
    res.status(200).json({messgae: 'set goals'});
})
const updateGoal = asyncHandler(async (req,res) =>{
    res.status(200).json({messgae: `update goal ${req.params.id}`});
})
const deleteGoal = asyncHandler(async (req,res) =>{
    res.status(200).json({messgae: `delete goal ${req.params.id}`});
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}