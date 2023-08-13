import { Text, View, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.secondary1,
		padding: 25,
		borderRadius: 10,
		margin: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		color: Colors.secondary1,
		fontSize: 38,
		fontFamily: 'open-sans-bold',
	},
});
