import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function DescriptionText({ children }) {
	return <Text style={styles.descriptionText}>{children}</Text>;
}

export default DescriptionText;

const styles = StyleSheet.create({
	descriptionText: {
		color: Colors.secondary1,
		fontSize: 25,
	},
});
