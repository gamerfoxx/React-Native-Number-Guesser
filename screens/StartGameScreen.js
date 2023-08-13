import { StyleSheet, TextInput, View, Alert } from 'react-native';
import { useState } from 'react';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

function StartGameScreen({ onConfirmNumber }) {
	const [enteredGuess, setEnteredGuess] = useState('');

	function numberInputHander(enteredNumber) {
		setEnteredGuess(enteredNumber);
	}

	function resetGuessHandler() {
		setEnteredGuess('');
	}

	function confirmInputHandler() {
		const lChosenNumber = parseInt(enteredGuess);
		console.log(lChosenNumber, enteredGuess);
		if (isNaN(lChosenNumber) || lChosenNumber <= 0 || lChosenNumber > 99) {
			Alert.alert(
				'Invalid Number',
				'Number must bne a number between 1 and 99',
				[{ test: 'Okay', style: 'destructive', onPress: resetGuessHandler }]
			);
			return;
		}
		onConfirmNumber(lChosenNumber);
	}

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
					<MainButton onPress={resetGuessHandler}>Reset</MainButton>
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
		backgroundColor: Colors.primary1,
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
		borderBottomColor: Colors.secondary1,
		borderBottomWidth: 2,
		color: Colors.secondary1,
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
