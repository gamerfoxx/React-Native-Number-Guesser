import { Text, View, Pressable, StyleSheet } from 'react-native';

function MainButton({ children }) {
	function pressHandler() {
		console.log('clicked');
	}
	return (
		<View
			style={(pressed) =>
				pressed
					? [styles.pressed, styles.buttonOuterContainer]
					: styles.buttonOuterContainer
			}>
			<Pressable
				style={styles.buttonInnerContainer}
				onPress={pressHandler}
				android_ripple={{ color: '#964897' }}>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default MainButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 30,
		margin: 4,
		overflow: 'hidden',
	},

	buttonInnerContainer: {
		backgroundColor: '#742685',
		paddingHorizontal: 5,
		paddingVertical: 10,
		elevation: 2,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75,
	},
});
