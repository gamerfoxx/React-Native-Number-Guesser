import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOver from './screens/GameOver';

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameOver, setGameOver] = useState(true);

	function pickedNumberHandler(userNumber) {
		setUserNumber(userNumber);
		setGameOver(false);
	}

	let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

	function gameOverHandler() {
		setGameOver(true);
	}

	if (userNumber) {
		screen = (
			<GameScreen
				userNumber={userNumber}
				onGameOver={gameOverHandler}
			/>
		);
	}

	if (gameOver && userNumber) {
		screen = <GameOver />;
	}

	return (
		<LinearGradient
			colors={[Colors.primary1, Colors.secondary1]}
			style={styles.mainScreen}>
			<ImageBackground
				source={require('./assets/Image/background.png')}
				resizeMode="cover"
				style={styles.mainScreen}
				imageStyle={styles.backgroundImage}>
				<SafeAreaView style={styles.mainScreen}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	mainScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.15,
	},
});
