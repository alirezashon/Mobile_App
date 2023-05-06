/** @format */

import React, { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import IssuesList from './IssuesList'
import IssueDetails from './IssueDetails'  

type Issue = {
	key: string
	summary: string
	description?: string
	status: string
	assignee?: string
}

const exampleIssues: Issue[] = [
	{ key: 'ISSUE-13', summary: 'Example issue 1', status: 'To Do' },
	{ key: 'ISSUE-456', summary: 'Example issue 2', status: 'In Progress' },
	{ key: 'ISSUE-789', summary: 'Example issue 3', status: 'Done' },
  { key: 'ALI-2222', summary: 'barname benevisi', status: 'In Progress' },
  
]

export default function App() {
	const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null)
	const handleIssuePress = (issueKey: string) => {
		const selectedIssue = exampleIssues.find((issue) => issue.key === issueKey)
		setSelectedIssue(selectedIssue || null)
	}

	const handleBackPress = () => {
		setSelectedIssue(null)
	}

	return (
		<SafeAreaView style={styles.container}>
			{selectedIssue ? (
				<IssueDetails
					issue={selectedIssue}
					onBackPress={handleBackPress}
				/>
			) : (
				<IssuesList
					issues={exampleIssues}
					onPress={handleIssuePress}
				/>
			)}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

// import React, { useState, useEffect } from 'react';
// import { View,ScrollView, Text, StyleSheet } from 'react-native';

// const CustomFields = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://192.168.1.85:3000/api/customFields')
//       .then(response => response.json())
//       .then(json => setData(json))
//       .catch(error => console.error(error))
//   }, []);

//   return (
//     <ScrollView>

//     <View style={styles.container}>
//       <Text style={styles.heading}>Custom Fields:</Text>
//       {data.map((field, index) => (
//         <Text key={index} style={styles.field}>{field}</Text>
//       ))}
//     </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   field: {
//     fontSize: 18,
//     marginBottom: 8,
//   },
// });

// export default CustomFields;
