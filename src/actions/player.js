import {
  PLAYER_PLAY_TRACK,
  PLAYER_PLAY_PAUSE,
  PLAYER_SET_TRACK,
  PLAYER_SET_PLAYLIST,
  PLAYER_UPDATE_PLAYLIST,
  PLAYER_SET_PAGE_ALBUM_ID_OWNER_ID,
  PLAYER_NEXT,
  PLAYER_PREV
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

export function playerUpdatePlaylist() {
  return {
    type: PLAYER_UPDATE_PLAYLIST
  };
}

export function playerSetPageAlbumIdOwnerId(page, ownerId, albumId) {
  return {
    type: PLAYER_SET_PAGE_ALBUM_ID_OWNER_ID,
    payload: {
      page,
      ownerId,
      albumId
    }
  };
}

export function playerNext() {
  return {
    type: PLAYER_NEXT
  };
}

export function playerPrev() {
  return {
    type: PLAYER_PREV
  };
}
