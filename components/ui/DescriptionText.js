import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function DescriptionText({ children, style }) {
	return <Text style={[styles.descriptionText, style]}>{children}</Text>; // used to have the option to overwrite styles in this file with the styles added as a prop
}

export default DescriptionText;

const styles = StyleSheet.create({
	descriptionText: {
		color: Colors.secondary1,
		fontSize: 25,
	},
});
