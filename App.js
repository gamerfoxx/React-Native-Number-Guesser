import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
	return (
		<LinearGradient
			colors={['#631574', '#eea41e']}
			style={styles.mainScreen}>
			<ImageBackground
				source={require('./assets/Image/background.png')}
				resizeMode="cover"
				style={styles.mainScreen}
				imageStyle={styles.backgroundImage}>
				<StartGameScreen />
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
