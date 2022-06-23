
const getGoals = (req,res) =>{
    res.status(200).json({messgae: 'get goals'});
}
const setGoal = (req,res) =>{
    res.status(200).json({messgae: 'set goals'});
}
const updateGoal = (req,res) =>{
    res.status(200).json({messgae: `update goal ${req.params.id}`});
}
const deleteGoal = (req,res) =>{
    res.status(200).json({messgae: `delete goal ${req.params.id}`});
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}