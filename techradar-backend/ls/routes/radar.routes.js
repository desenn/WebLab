module.exports = app => {
    const technology = require("../controllers/radar.controller.js");

    var router = require("express").Router();

    // Create a new Technology
    router.post("/new", technology.create);

    // Retrieve all Technologies
    router.get("/", technology.findAll);

    // Retrieve all published Technologies
    router.get("/published", technology.findAllPublished);

    // Retrieve all published Technologies
    router.get("/unpublished", technology.findAllUnPublished);

    // Retrieve a single Technology with id
    router.get("/:id", technology.findOne);

    // Update a Technology with id
    router.put("/:id", technology.update);

    app.use('/api/technology', technology);
};