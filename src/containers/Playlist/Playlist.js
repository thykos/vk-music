import React from 'react';
import {connect} from 'react-redux';

import {playerPlayTrack, playerPlayPause, playerFetchPlaylist} from '../../actions/player';

import {Audios} from '../Audios/Audios';

const Playlist = props => <Audios {...props} withoutInitFetch={true} withoutShuffleOnPlay={true} />;

const mapStateToProps = ({player, entities}) => {
	const {entityId, playlist, error, offset, count, fetching} = player;
	const {items, ownerId, albumId} = entities[player.entityId] || {};

	return ({
		entityId,
		items,
		error,
		offset,
		count,
		ownerId,
		albumId,
		fetching,
		ids: playlist,
		activeAudioId: player.current,
		activeAudioOwnerId: ownerId,
		isShuffling: player.isShuffling,
		isAudioPlaying: player.isPlaying
	});
};

const mapDispatchToProps = dispatch => ({
	fetch: params => dispatch(playerFetchPlaylist(params)),
	playTrack: params => dispatch(playerPlayTrack(params)),
	playPause: () => dispatch(playerPlayPause())
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
