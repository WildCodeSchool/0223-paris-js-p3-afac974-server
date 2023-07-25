const argon2 = require("argon2");
const db = require("../../config/database");
// ici on fait les fonction

const findAll = () => {
  return db
    .query("select * from user")
    .then(([data]) => {
      return data;
    })
    .catch((err) => {
      console.error("err", err);
    });
};

const findByMail = (mail) => {
  return db
    .query("select * from user where mail = ?", [mail])
    .then(([data]) => {
      return data;
    })
    .catch((err) => {
      console.error("Error ", err);
      return err;
    });
};

const getById = async (id) => {
  const [user] = await db.query(
    "SELECT id, firstname, lastname , mail, isAdmin FROM user WHERE id = ?",
    [id]
  );
  return user;
};

const modifyOneUser = async (user, userId) => {
  const { newPassword, ...userData } = user;
  if (newPassword) {
    const hashedPassword = await argon2.hash(newPassword);
    userData.password = hashedPassword;
  }
  return db
    .query("update user set ? where id = ?", [user, userId])
    .then(([result]) => {
      return result;
    })
    .catch((err) => {
      console.error("err", err);
      throw err;
    });
};

const findOneUser = (id) => {
  return db
    .query("select * from user where id = ?", [id])
    .then(([data]) => {
      return data;
    })
    .catch((err) => {
      console.error("err", err);
    });
};

const addUser = (user) => {
  const {
    firstname,
    lastname,
    user_name,
    password,
    mail,
    isAdmin,
    profile_picture,
  } = user;
  return db
    .query(
      "insert into user (firstname , lastname, user_name, password, mail, isAdmin, profile_picture) values (?, ?, ?, ?, ?, ?, ?)",
      [firstname, lastname, user_name, password, mail, isAdmin, profile_picture]
    )
    .then(([data]) => {
      return { id: data.insertId, ...user };
    });
  // .catch((err) => {
  //     console.error(err); })
};

const removeUser = (id) => {
  return db
    .execute("delete from user Where id = ? ", [id])
    .then(([data]) => data)
    .catch((err) => {
      console.error(err);
    });
};

const userFavorite = (favorite) => {
  const { user_id, art_id } = favorite;
  return db
    .query(" insert into user_art_favorite (user_id, art_id) values (?, ?)", [
      user_id,
      art_id,
    ])
    .then(([data]) => {
      return { ...favorite };
    });
};

const findByFavorite = (data) => {
  const { user_id, art_id } = data;
  return db
    .query("select * from user_art_favorite where user_id = ? and art_id = ?", [
      user_id,
      art_id,
    ])
    .then(([data]) => {
      return data;
    });
};

const findAllFavoriteById = (user_id) => {
  return db
    .query(
      "select * from art as a join user_art_favorite as uaf on a.id = uaf.art_id join user as u on u.id= uaf.user_id where user_id = ? ",
      [user_id]
    )
    .then(([data]) => {
      return data;
    });
};

module.exports = {
  findAll,
  findOneUser,
  addUser,
  removeUser,
  modifyOneUser,
  findByMail,
  userFavorite,
  findByFavorite,
  findAllFavoriteById,
  getById,
};
