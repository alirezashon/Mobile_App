import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface IssueDetailsProps {
    issue: {
    key: string;
    summary: string;
    description: string;
    status: string;
    assignee: string;
  };
  onBackPress: () => void;
}

const IssueDetails: React.FC<IssueDetailsProps> = ({ issue, onBackPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.issueDetailsContainer}>
        <Text style={styles.issueKey}>{issue.key}</Text>
        <Text style={styles.issueSummary}>{issue.summary}</Text>
        <Text style={styles.issueDescription}>{issue.description}</Text>
        <Text style={styles.issueStatus}>{issue.status}</Text>
        <Text style={styles.issueAssignee}>{issue.assignee}</Text>
      </View>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#499b01',
    fontWeight: 'bold',
  },
  issueDetailsContainer: {
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderRadius: 8,
  },
  issueKey: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  issueSummary: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  issueDescription: {
    marginBottom: 8,
  },
  issueStatus: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  issueAssignee: {
    fontStyle: 'italic',
  },
});

export default IssueDetails;
