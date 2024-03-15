const { userModel } = require("../../mudels/userModel"); // تصحيح في اسم المجلد models
const expressAsyncHandler = require("express-async-handler");
const verfiyTokenandAdmin = require("../medelweres/tokenmedelweres");


router.get("getAllUsers",verfiyTokenandAdmin,expressAsyncHandler(async(req,res) => {
    let users = await userModel.find()
    res.status(201).json(users)
}))

module.exports = router; // تصحيح في تصدير الراوتر
