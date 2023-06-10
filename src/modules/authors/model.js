const db = require('../../config/database')

const findAll = () => {
    return db
        .execute('select * from author')
        .then(([data]) => {
            return data
        })
        .catch((err) => console.log('err', err))
}

const findOneAuthor = (id) => {
    return db
        .execute('select * from author where id = ?', [id])
        .then(([data]) => {
            return data
        })
        .catch((err) => console.log('err', err))
}

const addAuthor = (author) => {
    const {firstname, lastname, birthdate, deathdate, biography} = author
    return db
        .query('INSERT INTO author (firstname, lastname, birthdate, deathdate, biography) values (?, ?, ?, ?, ?)', [firstname, lastname, birthdate, deathdate, biography])
        .then(([data]) => {
            return {id: data.insertId, ...author}
        })
        .catch((err) => console.log('err', err))
}

const modifyOneAuthor = (author, authorId) => {
    return db
        .query('update author set ? where id = ?', [author, authorId])
        .then(([result]) => {
            return result
        })
        .catch((err) => console.log(err))
}

module.exports = {findAll, findOneAuthor, addAuthor, modifyOneAuthor}