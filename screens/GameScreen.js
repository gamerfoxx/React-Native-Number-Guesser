import { View, StyleSheet, Alert, Text, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import MainButton from '../components/ui/MainButton';
import Card from '../components/ui/Card';
import DescriptionText from '../components/ui/DescriptionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

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
	const [guessRounds, setGuessRounds] = useState([initialComputerGuess]);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver(guessRounds.length);
		}
	}, [currentGuess, userNumber, onGameOver, guessRounds]); //dependencies for everything called in useEffect

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
		setGuessRounds((prevGuessRounds) => [newGuess, ...prevGuessRounds]);
	}
	const guessRoundsListLength = guessRounds.length;

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
			<View style={styles.listView}>
				<FlatList
					data={guessRounds}
					renderItem={(itemData) => (
						<GuessLogItem
							roundNumber={guessRoundsListLength - itemData.index}
							guess={itemData.item}>
							{itemData.item}
						</GuessLogItem>
					)}
					keyExtractor={(item) => item}></FlatList>
			</View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	gameScreen: {
		flex: 1,
		padding: 30,
		alignItems: 'center',
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
	listView: {
		flex: 1,
		padding: 15,
	},
});
