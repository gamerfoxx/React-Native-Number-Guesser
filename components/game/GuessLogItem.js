import { Text, View, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function GuessLogItem({ roundNumber, guess }) {
	return (
		<View style={styles.listItem}>
			<Text style={styles.listText}>#{roundNumber}</Text>
			<Text style={styles.listText}>Opponents guess: {guess}</Text>
		</View>
	);
}

export default GuessLogItem;

const styles = StyleSheet.create({
	listItem: {
		borderColor: Colors.primary2,
		borderWidth: 1,
		borderRadius: 50,
		padding: 15,
		marginVertical: 8,
		backgroundColor: Colors.secondary1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		elevation: 4,
	},
	listText: {
		fontFamily: 'open-sans',
	},
});
