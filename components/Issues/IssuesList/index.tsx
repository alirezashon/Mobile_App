import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Vibration, Modal, Button } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

interface IssuesListProps {
  issues: {
    key: string
    summary: string
  }[]
  onPress: (key: string) => void
}

const IssuesList: React.FC<IssuesListProps> = ({ issues, onPress }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [selectedIssueKey, setSelectedIssueKey] = useState('')
  
  const handleApprove = (key: string) => {
    console.log(`Approved issue ${key}`)
    setSelectedIssueKey(key)
    setModalMessage(`Are you sure you want to approve Issue-${key} ?`)
    setModalVisible(true)
    Vibration.vibrate(50) // Vibrate for 50ms when clicked
  }

  const handleDecline = (key: string) => {
    console.log(`Declined issue ${key}`)
    setSelectedIssueKey(key)
    setModalMessage(`Are you sure you want to decline Issue-${key} ?`)
    setModalVisible(true)
    Vibration.vibrate([0, 100, 50, 100]) // Vibrate with a pattern of 0ms, 100ms, 50ms, 100ms when clicked
  }

  const handleModalSubmit = () => {
    console.log(`Submitting ${modalMessage} for Issue-${selectedIssueKey}`)
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      {issues.map((issue) => (
        <TouchableOpacity
          style={styles.issueContainer}
          onPress={() => {
            onPress(issue.key)
            Vibration.vibrate(50) // Vibrate for 50ms when clicked
          }}
          key={issue.key}>
          <View style={styles.textContainer}>
            <Text style={styles.issueKey}>{issue.key}</Text>
            <Text
              style={styles.issueSummary}
              numberOfLines={1}
              ellipsizeMode='tail'>
              {issue.summary.length > 40
                ? `${issue.summary.substring(0, 40)}...`
                : issue.summary}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => handleApprove(issue.key)}>
              <FontAwesome
                name='thumbs-up'
                size={24}
                color='#499b01'
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => handleDecline(issue.key)}>
              <FontAwesome
                name='thumbs-down'
                size={24}
                color='#E74C3C'
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
     <Modal
  animationType='slide'
  transparent={true}
  visible={modalVisible}>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalMessage}>{modalMessage}</Text>
      <View style={styles.modalButtonContainer}>
        <TouchableOpacity
          style={[styles.modalButton, { backgroundColor: '#F7464A' }]}
          onPress={handleModalSubmit}>
          <Text style={[styles.modalButtonText, { color: '#FFF' }]}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.modalButton, { backgroundColor: '#EEE' }]}
          onPress={() => setModalVisible(false)}>
          <Text style={[styles.modalButtonText, { color: '#555' }]}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

		flex: 1,
		backgroundColor: '#a5cd30',
		padding: 16,
	},
	issueContainer: {
		backgroundColor: '#FFFFFF',
		padding: 8,
		marginBottom: 8,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderRadius: 4,
		shadowColor: '#000000',
		shadowOpacity: 0.3,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 4,
		elevation: 4,
	},
	issueKey: {
		fontWeight: 'bold',
		marginBottom: 4,
		color: '#000000',
	},
	issueSummary: {
		marginBottom: 4,
		color: '#000000',
	},
	textContainer: {
		flex: 1,
		paddingRight: 16,
	},
	iconContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconButton: {
		marginLeft: 8,
  },
    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
  modalMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  modalButton: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default IssuesList
