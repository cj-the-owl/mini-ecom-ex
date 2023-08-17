const db = require("../config/db.config")

const { hash, compare, hashSync} = require("bcrypt")

const { createToken } = require("../middleware/AuthenticatedUser")

// User

class User {
    login(req, res) {
        const {userEmail, userPassword} = req.body 
        const strQry = 
        `
        Select firstName, lastName, userEmail, userPassword, userImg, userRole 
        From Users
        where userEmail = '${userEmail}';
        `
        db.query(strQry, async (err, data) => {
            if (err) throw err
            if ((!data.length) || (data == null)) {
                res.status(401).json({err: "Provided A Wrong Email Address!"})
            } else {
                await compare(userPassword, data[0].userPassword, (cErr, cResult) => {
                    if (cErr) throw cErr
                    const jwToken = createToken (
                        {
                            userEmail, userPassword
                        }
                    )
                    res.cookie("LegitUser", jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    })
                    if (cResult) {
                        res.status(200).json({
                            msg: "User is Logged In",
                            jwToken,
                            result:data[0]
                        })
                    } else {
                        res.status(401).json({
                            err: "You entered an invalid password or did not signup"
                        })
                    }
                })
            }
        })
    }
    fetchUsers(req, res) {
        const strQry = 
        `
        Select usersID, firstName, lastName, userEmail, userPassword, UserImg, userRole
        From Users;
        `
        db.query(strQry, (err, data) => {
            if (err) throw err
            else res.status(200).json({results: data})
        })
    }
    fetchUser(req, res) {
        const strQry = 
        `
        Select usersID, firstName, lastName, userEmail, userPassword, UserImg, userRole
        From Users
        Where usersID = ?;
        `
        db.query(strQry, [req.params.id], 
            (err, data) => {
            if (err) throw err
            else res.status(200).json({results: data})
        })
    }
    async createUser(req, res) {
        let detail = req.body
        detail.userPassword = await
        hash(detail.userPassword, 15)
        let user = {
            userEmail: detail.userEmail,
            userPassword: detail.userPassword
        }
        const strQry = 
        `
        Insert into Users
        set ?;
        `
        db.query(strQry, [detail], (err) => {
            if (err) {
                res.status(401).json({err})
            } else {
                const jwToken = createToken(user)
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                })
                res.status(200).json({msg: "A User record was saved"})
            }
        })
    }
    update(req, res) {
        let data = req.body
        if(data.userPassword !== null ||
            data.userPassword !== undefined)
            data.userPassword = hashSync(data.userPassword, 15)
        const strQry = 
        `
        Update Users
        Set ?
        Where usersID = ?;
        `
        db.query(strQry, [data, req.params.id],
            (err) =>{
                if (err) throw err
                res.status(200).json({msg: "A row affected"})
            })
    }
    deleteUser(req, res) {
        const strQry =
        `
        Delete from Users
        Where usersID = ?;
        `
        db.query(strQry, [req.params.id],
            (err) => {
                if(err) throw err
                res.status(200).json( {msg: "A Record was removed from a database"})
            })
    }
}

module.exports = { User }