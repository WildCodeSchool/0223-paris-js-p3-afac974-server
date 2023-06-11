const db = require('../../config/database')

const findAllTech = () => {
    return db
        .execute('select * from technique')
        .then(([data]) => {
            return data
        })
        .catch((err) => console.log('err', err))
}

const findOneTech = (id) => {
    return db
        .execute('select * from technique where id = ?', [id])
        .then(([data]) => {
            return data
        })
        .catch((err) => console.log('err', err))
}

const addTech = (technique) => {
    const { name } = technique
    return db
        .query('INSERT INTO technique (name) values (?)', [name])
        .then(([data]) => {
            return {id: data.insertId, ...technique}
        })
        .catch((err) => console.log('err', err))
}

const modifyOneTech = (technique, techniqueId) => {
    return db
        .query('update technique set ? where id = ?', [technique, techniqueId])
        .then(([result]) => {
            return result
        })
        .catch((err) => console.log(err))
}

const removeOneTech = (id) => {
    return db
        .execute('delete from technique where id = ?', [id])
        .then(([data]) => {
            return data
        })
        .catch((err) => console.log(err))
}

module.exports = {
    findAllTech,
    findOneTech,
    addTech,
    modifyOneTech,
    removeOneTech
};