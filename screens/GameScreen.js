import { View, StyleSheet, Alert } from 'react-native';
import Title from '../components/ui/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import MainButton from '../components/ui/MainButton';
import Card from '../components/ui/Card';
import DescriptionText from '../components/ui/DescriptionText';
import { Ionicons } from '@expo/vector-icons';

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

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	}, []); // no dependencies would only be run when the component is loaded

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
				<DescriptionText style={styles.descriptionText}>
					Higher or Lower?
				</DescriptionText>
				<View style={styles.buttonsContainer}>
					<View style={styles.buttonContainer}>
						<MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
							<Ionicons
								name="md-add"
								size={24}
								color="white"
							/>
						</MainButton>
					</View>
					<View style={styles.buttonContainer}>
						<MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
							<Ionicons
								name="md-remove"
								size={24}
								color="white"
							/>
						</MainButton>
					</View>
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
	buttonsContainer: {
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
	},
	descriptionText: {
		marginBottom: 12,
	},
});
