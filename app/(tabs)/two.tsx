/** @format */

import { StyleSheet, ScrollView,View } from 'react-native'
import { Text } from '../../components/Themed'
import SVG from '../../components/SVG'
import Circulation from '../../components/SVG/Circulation'

export default function TabTwoScreen() {
	return (
		<>
			<ScrollView style={styles.container}>
				<View style={{ height: '30%' }}>
					<SVG />
				</View>
				<View style={{ height: '50%' }}>
					<Circulation />
				</View>
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
	
		backgroundColor: 'lightgray',
		flex: 1,

	},
})
