const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const fileShareSchema = new Schema({
    filename: filename,
    filesize: filesize,
    filetype: extension,
}, { timestamps: true,
})

module.exports = mongoose.model("file", fileShareSchema)