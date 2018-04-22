import { Div } from 'glamorous'
import React from 'react'

import SeriesHero from '../series-hero'

const SeriesHeroPage = () => {

	return (
		<Div maxWidth="1100" margin="0 auto">
			<SeriesHero
				seriesTitle="Easter"
				publisher="LightWorkers, Jesus Film, and Lumo"
				imgSrc="//d33q4ye4b26s92.cloudfront.net/videos/thumbnails/266/910x350.jpg"
				publisherHref="#"
			/>
		</Div>
	)
}

export default SeriesHeroPage
