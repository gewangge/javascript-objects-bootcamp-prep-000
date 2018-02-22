var playlist = {
  daniel_avery: "Deone Logic",
  moodymean: "Lyk U Use 2",
  lone: "Airglow Fires"
}

function updatePlaylist(object, nameOfArtist, songTitle) {
  object[nameOfArtist] = songTitle
  return object
}

function removeFromPlaylist(playlist, nameOfArtist) {
  delete playlist.nameOfArtist;
  return playlist
}
