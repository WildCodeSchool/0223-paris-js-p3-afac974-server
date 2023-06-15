const db = require('../../config/database')
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

const modifyOneUser = (user, userId) => {
    return db
        .query('update user set ? where id = ?', [user, userId])
        .then(([result])=>{
            return result
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


const removeUser = (id) => {
    return db
        .execute("delete from user Where id = ? ",[id])
        .then(([data]) => data )
        .catch((err) => {
        console.error(err)
            })
}

module.exports = { findAll, findOneUser, addUser,removeUser, modifyOneUser }


