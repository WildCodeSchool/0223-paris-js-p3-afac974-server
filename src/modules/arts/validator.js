const validateAddArt = (req, res, next) => {
    const { ref_img, full_title, short_title, achievement_date, dimensions, art_number, description, url_origin, img_url, author_id, category_id, technique_id  } = req.body
    const errors = []

    // if (ref_img == null || ref_img === "") {
    //     errors.push({ field : "ref_img", message : "This image is required"})
    // } else if (ref_img.length >= 45) {
    //     errors.push({ field : "ref_img", message: "Should contain less than 45 characters" });
    //   }

    if (full_title == null || full_title === "") {
        errors.push({ field : "full_title", message : "This title is required"})
    } else if (full_title .length >= 100) {
        errors.push({ field : "full_title", message: "This title should contain less than 100 characters" });
      }

    // if (short_title == null || short_title === "") {
    //     errors.push({ field : "short_title", message : "This short title is required"})
    // } else if (short_title.length >= 60) {
    //     errors.push({ field : "short_title", message: "Should contain less than 60 characters" });
    //   }

    // if (achievement_date == null || achievement_date === "") {
    //     errors.push({ field : "achievement_date", message : "The date is required"})
    // } else if (achievement_date.length >= 60) {
    //     errors.push({ field : "achievement_date", message: "Should contain less than 60 characters" });
    //   }

    // if (dimensions == null || dimensions === "") {
    //     errors.push({ field : "dimensions", message : "This dimensions is required"})
    // } else if (dimensions.length >= 45) {
    //     errors.push({ field : "dimensions", message: "Should contain less than 45 characters" });
    //   }

    // const numberRegex = /^[0-9\\d*]{1,100}$/; 

    // if (art_number == null || art_number === "") {
    //     errors.push({ field : "art_number", message : "The art number is required"})
    // } else if (!numberRegex.test(art_number)) {
    //     errors.push({ field : 'art_number', message: 'Invalid art number' });
    //   }

    if (description == null || description === "") {
        errors.push({ field : "description", message : "This description is required"})
    }

    // if (url_origin == null || url_origin === "") {
    //     errors.push({ field : "url_origin", message : "This url is required"})
    // } else if (title.length >= 255) {
    //     errors.push({ field : "url_origin", message: "Should contain less than 255 characters" });
    //   }

    // if (img_url == null || img_url === "") {
    //     errors.push({ field : "img_url", message : "This image url is required"})
    // } 

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