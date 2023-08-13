import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import MainButton from '../components/ui/MainButton';

function GameOver({ roundsNum, userNumber, onStartNewGame }) {
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
				Your phone needed <Text style={styles.highlightText}>{roundsNum}</Text>{' '}
				rounds to guess the number
				<Text style={styles.highlightText}> {userNumber}</Text>.
			</Text>
			<MainButton onPress={onStartNewGame}>New Game</MainButton>
		</View>
	);
}

export default GameOver;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageContainer: {
		width: deviceWidth < 350 ? 150 : 300,
		height: deviceWidth < 350 ? 150 : 300,
		borderRadius: deviceWidth < 350 ? 75 : 150,
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
