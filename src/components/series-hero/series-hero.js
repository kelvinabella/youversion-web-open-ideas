import glamorous, { Div } from 'glamorous'
import PropTypes from 'prop-types'
import React from 'react'

import LinkText from '@youversion/melos/dist/components/links/LinkText'
import Heading1 from '@youversion/melos/dist/components/typography/Heading1'
import Heading2 from '@youversion/melos/dist/components/typography/Heading2'

import InfoIcon from '../../components/svg/info-icon'

const BuildContainer = (imgSrc) => {
	return glamorous.div({}, () => {
		return {
			position: 'relative',
			minHeight: '368',
			maxWidth: '1100',
			background: `url('${imgSrc}') no-repeat center top`,
			backgroundSize: 'cover',
			className: 'series-hero'
		}
	})
}

const SeriesHero = (props) => {
	const Container = BuildContainer(props.imgSrc)

	return (
		<Container className="series-hero">
			<Div
				bottom='20'
				left='20'
				position='absolute'
			>
				<Heading1 textAlign='left' fontColor='white'>{props.seriesTitle}</Heading1>
				<Heading2>
					<Div
						height='24'
						width='24'
						display='inline-block'
						position='relative'
						paddingRight='3'
						top='7'
					>
						<InfoIcon />
					</Div>
					<LinkText href={props.creditHref}>{props.credit}</LinkText>
				</Heading2>
			</Div>
		</Container>
	)
}

SeriesHero.propTypes = {
	seriesTitle: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	credit: PropTypes.string.isRequired,
	creditHref: PropTypes.string.isRequired
}

export default SeriesHero
