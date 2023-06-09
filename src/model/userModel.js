const db = require('../model/db.js')



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

const modifydAll= ()=>{
    return db
    .query('select * from user')
    .then(([data])=>{
        return data
    })
    .catch((err)=>{
        console.error('err', err)
    })
}

module.exports = { findAll, modifydAll }

