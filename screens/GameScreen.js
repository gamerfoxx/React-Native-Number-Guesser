import { Text, View, StyleSheet } from 'react-native';

function GameScreen() {
	return (
		<View style={styles.gameScreen}>
			<Text>Computers Guess</Text>
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
