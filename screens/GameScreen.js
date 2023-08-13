import { View, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import MainButton from '../components/ui/MainButton';
import Card from '../components/ui/Card';
import DescriptionText from '../components/ui/DescriptionText';

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
	const initialComputerGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialComputerGuess);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();
		}
	}, [currentGuess, userNumber, onGameOver]); //dependencies for everything called in useEffect

	function nextGuessHandler(direction) {
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'higher' && currentGuess > userNumber)
		) {
			Alert.alert("You know it's wrong", 'Tell the truth', [
				{ text: 'Sorry', style: 'cancel' },
			]);
			return;
		}
		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}
		console.log(minBoundary, maxBoundary);
		const newGuess = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess
		);
		setCurrentGuess(newGuess);
	}

	return (
		<View style={styles.gameScreen}>
			<Title>Computers Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<DescriptionText>Higher or Lower?</DescriptionText>
				<View>
					<MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
						+
					</MainButton>
					<MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
						-
					</MainButton>
				</View>
			</Card>
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
