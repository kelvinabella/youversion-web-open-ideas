import React from 'react'
import PropTypes from 'prop-types'
import { videoCollectionJson } from '../../api/video-api-mock'
import VideoThumbnail from './thumbnail-component'

const renderThumbnails = (response, i) => {
	const link = `/media/${response.id}`
	return (
		<VideoThumbnail
			key={i}
			thumbnail={response.thumbnails[0].url}
			link={link}
			title={response.title}
			runtime={response.runtime}
		/>
	)
}

const Thumbnails = () => {
	const response = videoCollectionJson.response.data.sub_videos

	return (
		<div className="thumbnails">
			{response.map(renderThumbnails)}
		</div>
	)
}

Thumbnails.propTypes = {
	match: PropTypes.shape({
		url: PropTypes.string
	}).isRequired
}

export default Thumbnails
