import { Text, View, StyleSheet } from 'react-native';

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#eea41e',
		textAlign: 'center',
		borderWidth: 2,
		borderColor: '#eea41e',
		padding: 14,
	},
});
