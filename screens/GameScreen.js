import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
	return (
		<View style={styles.gameScreen}>
			<Title>Computers Guess</Title>
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
