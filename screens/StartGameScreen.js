import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import { useState } from 'react';
import MainButton from '../components/MainButton';

function StartGameScreen() {
	const [enteredGuess, setEnteredGuess] = useState('');

	function numberInputHander(enteredNumber) {
		setEnteredGuess(enteredNumber);
	}

	function confirmInputHandler() {}

	return (
		<View style={styles.userInputContainer}>
			<TextInput
				style={styles.userGuessInput}
				maxLength={2}
				keyboardType="number-pad"
				autoCapitalize="none"
				autoCorrect={false}
				value={enteredGuess}
				onChangeText={numberInputHander}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<MainButton>Reset</MainButton>
				</View>
				<View style={styles.buttonContainer}>
					<MainButton onPress={confirmInputHandler}>Confirm</MainButton>
				</View>
			</View>
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
		justifyContent: 'center',
		alignItems: 'center',
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
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
});
