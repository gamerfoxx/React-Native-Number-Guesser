import { StyleSheet, View, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
	return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
	card: {
		marginTop: deviceWidth < 350 ? 12 : 25,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: Colors.primary1,
		borderRadius: 10,
		elevation: 8, // elevation used to add shadow on android
		shadowColor: 'black', // shadow used to add shadow on IOS
		shadowOffset: { width: 2, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
