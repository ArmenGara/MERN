const AuthorController = require("../controllers/author.controller")


module.exports = app => {
    app.get("/api/test", AuthorController.test)

    // CREATE
    app.post("/api/authors/new", AuthorController.create)
    // READ ALL
    app.get("/api/authors", AuthorController.allAuthors)
    // READ ONE
    app.get("/api/authors/:author_id", AuthorController.oneAuthor)

}
