import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: Colors.secondary1,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.secondary1,
		padding: 14,
	},
});
