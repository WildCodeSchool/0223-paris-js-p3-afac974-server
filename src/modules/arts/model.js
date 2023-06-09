const db = require('../../config/database')

const findAllArt = () => {
    return db
        .query('select * from art')
        .then(([data]) => {
            return data
        })
        .catch((err) => {
            console.error('err', err)
        })
}

module.exports = { findAllArt };