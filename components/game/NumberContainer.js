import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.secondary1,
		padding: deviceWidth < 350 ? 12 : 25,
		borderRadius: 10,
		margin: deviceWidth < 350 ? 12 : 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numberText: {
		color: Colors.secondary1,
		fontSize: deviceWidth < 350 ? 24 : 38,
		fontFamily: 'open-sans-bold',
	},
});
