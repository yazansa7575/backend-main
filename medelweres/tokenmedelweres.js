let jwt = require("jsonwebtoken")


function verfiyToken(req, res, next) {
    let authtoken = req.header.authorization
    if (authtoken) {
        let token = authtoken.spilt(" ")[1] 
        try {
            req.user =  jwt.verify(token, process.env.secretkey)
            next()
        } catch (error) {
            return res.status(401).json({ message: "Invalid token" })
        }
    } else {
        return res.status(401).json({ message: "no token provaid " })
    }
}
async function verfiyTokenandAdmin(req, res, next) {
    verfiyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            return res.status(401).json({ message: "you not Admin" })
        }

    })

}
module.exports = verfiyTokenandAdmin