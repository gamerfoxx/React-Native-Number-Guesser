import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

function GameScreen({ userNumber }) {
	const initialComputerGuess = generateRandomBetween(1, 100);
	const [currentGuess, setCurrentGuess] = useState();
	return (
		<View style={styles.gameScreen}>
			<Title>Computers Guess</Title>
			<Text></Text>
			<Text>Higher or Lower?</Text>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	gameScreen: {
		flex: 1,
		padding: 30,
	},
});
