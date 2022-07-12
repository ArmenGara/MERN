const PirateController = require("../controllers/book.controller")


module.exports = app => {
    app.get("/api/pirates/test", PirateController.test),
    app.post("/api/pirates/new", PirateController.create),
    app.get("/api/pirates", PirateController.allPirates),
    app.get("/api/pirates/:pirate_id", PirateController.onePirate),
    app.put("/api/pirates/:pirate_id", PirateController.updatePirate),
    app.delete("/api/pirates/:pirate_id", PirateController.deletePirate)
}