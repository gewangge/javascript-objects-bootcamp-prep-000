var playlist = {
  daniel_avery: 'Deone Logic'
  moodymean: 'Lyk U Use 2'
  lone: 'Airglow Fires'
}

function updatePlaylist(playlist, nameOfArtist, songTitle) {
  playlist[nameOfArtist] = songTitle
  return playlist
}

var newPlaylist = updatePlaylist(playlist, flying_lotus, never_catch_me)
