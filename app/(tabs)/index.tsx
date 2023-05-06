/** @format */

import { ScrollView, StyleSheet } from 'react-native'
import { Text, View } from '../../components/Themed'
import App from '../../components/Issues/Index'
export default function TabOneScreen() {
	return (
		<>
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.title}>Tab One</Text>
					<View
						style={styles.separator}
						lightColor='#eee'
						darkColor='rgba(255,255,255,0.1)'
					/>
				</View>
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
