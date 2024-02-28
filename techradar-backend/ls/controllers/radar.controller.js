const db = require("../routes");
const RadarDb = db.radar;

// Create and Save a new Technology
exports.create = (req, res) => {
// Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Technology
    const technology = new RadarDb({
        name: req.body.name,
        category: req.body.category,
        ring: req.body.ring,
        descTech: req.body.descTech,
        descClass: req.body.descClass,
        published: req.body.published ? req.body.published : false,
        creator: req.body.creator
    });

    // Save Technology in the database
    technology
        .save(technology)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while saving the new Technology."
            });
        });
};

// Retrieve all Technology from the database.
exports.findAll = (req, res) => {

};

// Find a single Technology with an id
exports.findOne = (req, res) => {

};

// Update a Technology by the id in the request
exports.update = (req, res) => {

};

// Delete a Technology with the specified id in the request
exports.delete = (req, res) => {

};

// Find all published Technologies
exports.findAllPublished = (req, res) => {

};

// Find all unpublished Technologies
exports.findAllUnPublished = (req, res) => {

};
