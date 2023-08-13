import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import MainButton from '../components/MainButton';

function StartGameScreen() {
	return (
		<View style={styles.userInputContainer}>
			<TextInput
				style={styles.userGuessInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<MainButton>Reset</MainButton>
			<MainButton>Confirm</MainButton>
		</View>
	);
}

export default StartGameScreen;

const styles = StyleSheet.create({
	userInputContainer: {
		marginTop: 100,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: '#631574',
		borderRadius: 10,
		elevation: 8, // elevation used to add shadow on android
		shadowColor: 'black', // shadow used to add shadow on IOS
		shadowOffset: { width: 2, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	userGuessInput: {
		height: 50,
		width: 50,
		fontSize: 34,
		borderBottomColor: '#eea41e',
		borderBottomWidth: 2,
		color: '#eea41e',
		marginVertical: 10,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
