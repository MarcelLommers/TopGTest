<template>
	<div
		class="location-page"
	>
		<location-card
			:location="location"
		>
		</location-card>

		<div
			class="card-bin"
			v-if="hasResidents"
		>
			<character-card
				v-for="(resident, index) in orderedResidents"
				:key="'r' + index"
				:character="resident"
			>
			</character-card>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'

	import * as RickAndMortyApi from '../../Api/RickAndMortyApi.js'

	import LocationCard  from "../../components/RickAndMorty/LocationCard";
	import CharacterCard from "../../components/RickAndMorty/CharacterCard";
	import _ from "lodash";

	export default {
		name: "LocationPage",
		components: {
			'character-card': CharacterCard,
			'location-card': LocationCard
		},
		data () {
			return {
				location: {},
				characterList: []
			}
		},
		mounted () {
			this.getLocation()
		},
		computed: {
			locationId () {
				return this.$route.params.locationId || 1
			},
			hasResidents () {
				return _.size(this.location.residents || []) > 0
			},
			orderedResidents () {
				return _.orderBy(this.characterList, ['id'], ['asc'])
			}
		},
		methods: {
			getLocation () {
				RickAndMortyApi.getLocation({
					id: this.locationId
				}).then(result => {
					Vue.set(this, 'location', result)

					_.forEach(result.residents, characterUrl => {
						this.getCharacterWithUrl(characterUrl)
					})
				})
			},
			getCharacterWithUrl (characterUrl) {
				RickAndMortyApi.getCharacterWithUrl({
					characterUrl: characterUrl
				}).then(result => {
					Vue.set(this.characterList, _.size(this.characterList), result)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>

	.location-page {
		display: flex;
		flex-direction: column;
		padding: 20px;
		align-items: center;
		justify-content: center;
		height: 100%;

		.card-bin {
			align-content: flex-start;
			display: flex;
			flex-flow: row wrap;
			height: calc(100% - 130px);
			overflow-y: auto;
			padding: 20px;
		}
	}

</style>