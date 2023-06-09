const db = require('../model/db.js')
// ici on fait les fonction


const findAll = () => {
    return db
        .query('select * from user')
        .then(([data]) => {
            return data
        })
        .catch((err) => {
            console.error('err', err)
        })
}


const modifyOne= ()=>{
    return db
    .query('select * from user where user=?', [user])
    .then(([data])=>{
        return data
    })
    .catch((err)=>{
        console.error('err', err)
    })
}



const findOneUser = (id) => {
    return db
        .query('select * from user where id = ?', [id])
        .then(([data]) => {
            return data
        })
        .catch((err) => {
            console.error('err', err)
        })
}


const addUser = (user) => {
    const { firstname , lastname, user_name, password, mail, isAdmin, profile_picture } = user
    return db 
        .query("insert into user (firstname , lastname, user_name, password, mail, isAdmin, profile_picture) values (?, ?, ?, ?, ?, ?, ?)",
        [firstname , lastname, user_name, password, mail, isAdmin, profile_picture])
        .then(([data]) => {
            return { id: data.insertId, ...user}
        })
        .catch((err) => {
            console.error(err); })
}


module.exports = { findAll, findOneUser, addUser, modifydAll}
>>>>>>> b875447e582a524098bfdb7625acb1fbf1956408

