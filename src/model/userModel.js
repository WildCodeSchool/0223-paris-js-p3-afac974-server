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

module.exports = { findAll, findOneUser }

