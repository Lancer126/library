class Library {
  constructor(name, creator) {
    this._name = name,
    this._creator = creator,
    this._playlists = []
  }

  addPlaylist(playlist) {
    this._playlists.push(playlist);
  }

  get playlists() {
    return this._playlists;
  }

  set name(newName) {
    this._name = newName;
  }
}

class Playlist {
  constructor(name) {
    this._name = name,
    this._tracks = []
  }

  get name() {
    return this._name;
  }

  get tracks() {
    let tracks = "";
    this._tracks.forEach((track) => {
      tracks += "\nTitle: " + track.title + ", Rating: " + track.rating + "/5, Length: " + track.lngth + " seconds.";
    })
    return tracks;
  }

  set name(newName) {
    this._name = newName;
  }

  overallRating() {
    let average = 0;
    for (let i = 0; i < this._tracks.length; i++) {
      const rating = this._tracks[i].rating;
      average += rating;
    }
    return average / this._tracks.length;
  }

  totalDuration() {
    let total = 0;
    for (let i = 0; i < this._tracks.length; i++) {
      const lngth = this._tracks[i].lngth;
      total += lngth;
    }
    return total;
  }

  addTrack(track) {
    this._tracks.push(track);
  }
}

class Track {
    constructor(title, rating, length) {
        this._title = title,
        this._rating = Math.floor(rating) >= 1 ? (Math.floor(rating) <= 5 ? Math.floor(rating) : 5) : 1,
        this._length = Math.floor(length)
    }

    get title() {
      return this._title;
    }

    get rating() {
        return this._rating;
    }

    get lngth() {
      return this._length;
    }
}

var lib1 = new Library("Hola", "Lancer");
var play1 = new Playlist("Dance");
var track1 = new Track("Lancer", 3, 32);
play1.addTrack(track1);
lib1.addPlaylist(play1);
console.log("\nTracks: ", lib1.playlists[0].tracks);
console.log("Average rating: " + lib1.playlists[0].overallRating() + "/5");
console.log("Sum length: ", lib1.playlists[0].totalDuration());

console.log(lib1);

play1.name = "Bro";

var play2 = new Playlist("EDM");
var track2 = new Track("Himalaya", -2, 27);
var track3 = new Track("Hi", 8, 70);
play1.addTrack(track2);
play1.addTrack(track3);
lib1.addPlaylist(play2);
console.log("\nTracks: ", lib1.playlists[0].tracks);
console.log("Average rating: " + lib1.playlists[0].overallRating() + "/5");
console.log("Sum length: ", lib1.playlists[0].totalDuration());

console.log(lib1);