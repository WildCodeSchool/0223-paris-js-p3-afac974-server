const validateAddArt = (req, res, next) => {
    const { full_title, description, img_url, author_id, category_id, technique_id  } = req.body
    const errors = []

    if (full_title == null || full_title === "") {
        errors.push({ field : "full_title", message : "This title is required"})
    } else if (full_title .length >= 100) {
        errors.push({ field : "full_title", message: "This title should contain less than 100 characters" });
      }

    if (description == null || description === "") {
        errors.push({ field : "description", message : "This description is required"})
    }


    if (author_id == null || author_id === "") {
        errors.push({ field : "author_id", message : "The id of author is required"})
    }

    if (category_id == null || category_id === "") {
        errors.push({ field : "category_id", message : "The id category is required"})
    }

    if (technique_id == null || technique_id === "") {
        errors.push({ field : "technique_id", message : "The id techique is required"})
    }

    if (errors.length) {
        res.status(422).json({ validationErrors: errors });
    } else {
        next();
    }
}

module.exports = { validateAddArt }