/** @format */

import { ScrollView, StyleSheet } from 'react-native'
import App from '../../components/Issues/Index'
export default function TabOneScreen() {
	return (
		<>
			<ScrollView>
				<App />
			</ScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
})
