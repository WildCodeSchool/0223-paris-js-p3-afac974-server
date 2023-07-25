const validatePutUser = (req, res, next) => {
    const { firstname, lastname, mail } = req.body
    const errors = []

    if (firstname == null || firstname === "") {
        errors.push({ field : "firstname", message : "This firstname is required"})
    }

    if (lastname == null || lastname === "") {
        errors.push({ field : "lastname", message : "This lastname is required"})
    }

    if (mail == null || mail === "") {
        errors.push({ field : "mail", message : "This mail is required"})
    }

    // const mailRegex = /[a-z0-9._]+@makesense.org/;
    const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!mailRegex.test(mail)) {
        errors.push({ field : "mail", message : "Invalid mail"})
    }

    if (errors.length) {
        res.status(422).json({ validationErrors: errors });
    } else {
        next();
    }
}

module.exports = { validatePutUser }