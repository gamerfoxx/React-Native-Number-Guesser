import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
	const [userNumber, setUserNumber] = useState();

	function pickedNumberHandler(userNumber) {
		setUserNumber(userNumber);
	}
	let screen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;
	if (userNumber) {
		screen = <GameScreen />;
	}

	return (
		<LinearGradient
			colors={['#631574', '#eea41e']}
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
