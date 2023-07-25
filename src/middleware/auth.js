const argon = require("argon2");
const jwt = require("jsonwebtoken");

const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  if (password && password !== "") {
    try {
      const hashedPassword = await argon.hash(password);
      req.body.password = hashedPassword;
    } catch (error) {
      console.error(error);
      return res.status(500).json("Server error");
    }
  }
  next();
};

module.exports = { hashPassword };

// const hashPassword = (req, res, next) => {
//   const { password, newPassword } = req.body;

//   if (password && password !== "") {
//     argon.hash(password)
//       .then((hashedPassword) => {
//         req.body.password = hashedPassword;
//         next();
//       })
//       .catch((err) => {
//         console.error(err);
//         res.status(500).json('Server error');
//       });
//   } else {
//     next();
//   }
// };

// const hashPassword = async (req, res, next) => {
//   //this hash handle both registration and change when logged in
//   const { newPassword } = req.body;
//   if (newPassword && newPassword !== "") {
//     try {
//       const hashedPassword = await argon.hash(newPassword);
//       req.body.newPassword = hashedPassword;
//       next();
//     } catch (error) {
//       console.error(error);
//       res.status(500).json("Server error");
//     }
//   } else {
//     next();
//   }
// };

const authorization = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);

    // Set the user details in the req.user object

    req.userId = data.id;
    req.isAdmin = data.isAdmin;
    return next();
  } catch {
    return res.sendStatus(401);
  }
};

const isAdmin = (req, res, next) => {
  if (req.isAdmin) {
    return next();
  }
  return res.sendStatus(403);
};

module.exports = { hashPassword, authorization, isAdmin };
