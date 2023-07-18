const { query } = require('../../config/database');
const db = require('../../config/database')

const findAllArt = (queryParams) => {
    let keyOrder = queryParams.order; // extraction du filtre ORDER
    if (typeof keyOrder === "undefined") keyOrder = "DESC";
    delete queryParams.order; // suppression de la clé "order"
    let queryOrder = 'ORDER by id ' + keyOrder;
    let queryFilters = "";
    let arrayFilters = [];
    let params = [];
    for (let key in queryParams) {
      arrayFilters.push(`${key} = ?`);
      params.push(queryParams[key]);
    }
    params.push(keyOrder);
    queryFilters = arrayFilters.join(" AND ");
    if (queryFilters.length > 0) queryFilters = " WHERE " + queryFilters;
  
    return db
      .query(
        `SELECT * FROM art AS a 
         JOIN category AS c on a.category_id = c.c_id 
         JOIN technique AS t on a.technique_id = t.t_id 
         JOIN author ON author.aut_id = a.author_id
         ${queryFilters} ${queryOrder}`,
        params
      )
      .then(([data]) => {
        return data;
      })
      .catch((err) => {
        console.error('err', err);
      });
  };
  

const findOneArt = (id) => {
    return db
        .query('select * from art as a JOIN category as c on a.category_id = c.c_id JOIN technique as t on a.technique_id  = t.t_id JOIN author on author.aut_id = a.author_id where id = ?', [id])
        .then(([data]) => {
            return data
        })
        .catch((err) => {
            console.error('err', err)
        })
}


const addArt = (art, img_url) => {
    const { ref_img , full_title, short_title, achievement_date, dimensions, art_number, description, url_origin, author_id, category_id, technique_id } = art
    return db 
        .query("INSERT INTO art (ref_img , full_title, short_title, achievement_date, dimensions, art_number, description, url_origin, img_url, author_id, category_id, technique_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [ref_img , full_title, short_title, achievement_date, dimensions, art_number, description, url_origin, img_url, author_id, category_id, technique_id])
        .then(([data]) => {
            return { id: data.insertId, ...art, img_url}
        })
        .catch((err) => {
            console.error(err); })
}


const modifyOneArt = (art, img_url, artId)=>{
    const { ref_img , full_title, short_title, achievement_date, dimensions, description, url_origin, author_id, category_id, technique_id } = art
    return db
    .query('update art set ref_img = ? , full_title = ?, short_title = ?, achievement_date = ?, dimensions = ?, description = ?, url_origin = ?, img_url = ?, author_id = ?, category_id = ?, technique_id = ? where id = ?', [ref_img , full_title, short_title, achievement_date, dimensions, description, url_origin, img_url, author_id, category_id, technique_id, artId])
    .then(([result])=>{
        return result
    })
    .catch((err)=>{
        console.error('err', err)
    })
}


const removeArt = (id) => {
    return db
        .query("delete from art where id = ?", [id])
        .then(([data]) => {
            return data;
        })
        .catch((err) =>{
            console.error("Error ", err)
        })
} 


module.exports = { findAllArt, findOneArt, addArt, modifyOneArt, removeArt};