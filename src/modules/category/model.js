const db = require('../../config/database')

const findAllCategory = () => {
    return db
        .query('select * from category')
        .then(([data]) => {
            return data
        })
        .catch((err) => {
            console.error('err', err)
        })
}

const findOneCategory = (id) => {
    return db
        .query('select * from category where id = ?', [id])
        .then(([data]) => {
            return data
        })
        .catch((err) => {
            console.error('err', err)
        })
}


const addCategory = (category) => {
    const {name} = category
    return db 
        .query("INSERT INTO category (name) values (?)",
        [name])
        .then(([data]) => {
            return { id: data.insertId, ...category}
        })
        .catch((err) => {
            console.error(err); })
}


const modifyOneCategory = (category, categoryId)=>{
    return db
    .query('update category set ? where id = ?', [category, categoryId])
    .then(([result])=>{
        return result
    })
    .catch((err)=>{
        console.error('err', err)
    })
}


const removeCategory = (id) => {
    return db
        .query("delete from category where id = ?", [id])
        .then(([data]) => {
            return data;
        })
        .catch((err) =>{
            console.error("Error ", err)
        })
} 


module.exports = { findAllCategory, findOneCategory, addCategory, modifyOneCategory, removeCategory};