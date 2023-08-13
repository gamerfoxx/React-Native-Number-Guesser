import { Text, View, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function MainButton({ children, onPress }) {
	return (
		<View
			style={(pressed) =>
				pressed
					? [styles.pressed, styles.buttonOuterContainer]
					: styles.buttonOuterContainer
			}>
			<Pressable
				style={styles.buttonInnerContainer}
				onPress={onPress}
				android_ripple={{ color: Colors.primary2 }}>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default MainButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		overflow: 'hidden',
	},

	buttonInnerContainer: {
		borderRadius: 30,
		backgroundColor: Colors.primary2,
		paddingHorizontal: 5,
		paddingVertical: 10,
		elevation: 2,
		margin: 4,
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
	},
	pressed: {
		opacity: 0.75,
	},
});
