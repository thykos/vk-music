import {
  PLAYER_PLAY_TRACK,
  PLAYER_PLAY_PAUSE,
  PLAYER_SET_TRACK,
  PLAYER_SET_PLAYLIST,
  PLAYER_SET_PLAYLIST_PAGE
} from '../constants/player';

export function playerPlayTrack(id) {
  return {
    type: PLAYER_PLAY_TRACK,
    payload: id
  };
}

export function playerPlayPause() {
  return {
    type: PLAYER_PLAY_PAUSE
  };
}

export function playerSetTrack(id) {
  return {
    type: PLAYER_SET_TRACK,
    payload: id
  };
}

export function playerSetPlaylist(playlist) {
  return {
    type: PLAYER_SET_PLAYLIST,
    payload: playlist
  };
}

export function playerSetPlaylistPage(page) {
  return {
    type: PLAYER_SET_PLAYLIST_PAGE,
    payload: page
  };
}
