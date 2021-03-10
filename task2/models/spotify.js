const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema ({
    songorder: orderNum,
    songtitle: titleName,
    songlength: trackLength,
})
const albumSchema = new Schema ({
    albumname: albumName,
    albumcover: albumArtLink,
    release: releaseYear,
    songs: [songSchema],
    tracks: songs.length
})
const artistSchema = new Schema ({
    artistname: artistName,
    artistprofile: imglink,
    albums: [albumSchema]
})
const playlistSchema = new Schema ({
    playlistname: playlistName,
    songs: [artistSchema],
    playlistlength: songs.length,
})
const userSchema = new Schema ({
    login: loginname,
    password: pw,
    useravatar: avatarlink,
    playlists: [playlistSchema],
})

module.exports = mongoose.model("spotify", artistSchema, userSchema)