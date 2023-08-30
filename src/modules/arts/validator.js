const validateAddArt = (req, res, next) => {
    const { full_title, description, img_url, author_id, category_id, technique_id  } = req.body;
    const errors = [];

    if (full_title == null || full_title === "") {
        errors.push({ field : "full_title", message : "Le titre de l'oeuvre est obligatoire"});
    } else if (full_title.length >= 100) {
        errors.push({ field : "full_title", message: "Le titre doit contenir moins de 100 caractères" });
    }

    if (description == null || description === "") {
        errors.push({ field : "description", message : "La description de l'oeuvre est obligatoire"});
    }

    if (author_id == null || author_id === "") {
        errors.push({ field : "author_id", message : "Veuillez choisir un artiste"});
    }

    if (category_id == null || category_id === "") {
        errors.push({ field : "category_id", message : "Veuillez choisir une catégorie d'oeuvre"});
    }

    if (technique_id == null || technique_id === "") {
        errors.push({ field : "technique_id", message : "Veuillez choisir une technique d'oeuvre"});
    }

    if (errors.length) {
        res.status(422).json({ validationErrors: errors });
    } else {
        next();
    }
}

module.exports = { validateAddArt }
