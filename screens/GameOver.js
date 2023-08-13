import { Text, View, StyleSheet, Image } from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import MainButton from '../components/ui/MainButton';

function GameOver() {
	return (
		<View style={styles.mainContainer}>
			<Title>Game Over</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require('../assets/Image/success.png')}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your phone needed <Text style={styles.highlightText}>X</Text> rounds to
				guess the number
				<Text style={styles.highlightText}> Y</Text>.
			</Text>
			<MainButton>New Game</MainButton>
		</View>
	);
}

export default GameOver;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 200,
		borderWidth: 3,
		borderColor: Colors.primary2,
		overflow: 'hidden',
		margin: 40,
	},
	image: {
		width: '100%',
		height: '100%',
	},
	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		marginBottom: 20,
	},
	highlightText: {
		fontFamily: 'open-sans-bold',
	},
});
