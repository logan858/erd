const mongoose = require("mongoose")
const Schema = mongoose.Schema


const friendSchema = new Schema ({
    username: uName,
    id: [idreference]
})

const pictureSchema = new Schema ({
    pictures: uploadedurl,
    caption: inputedblurb,
}, { 
    timestamps: true
})

const userSchema = new Schema ({
    username: uName,
    pw: pw,
    pictures: [pictureSchema],
    friends: [friendSchema],
    joined: creationDate,
    friendsCount: friends.length,
})

module.exports = mongoose.model("facebook", userSchema)