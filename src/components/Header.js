import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Theme from '../utils/Theme';

const Header = (props) => {
  return <Text style={styles.header} {...props} />
};

const styles = StyleSheet.create({
  header: {
		fontSize: 21,
		color: Theme.BLUE,
		fontWeight: 'bold',
		paddingVertical: 12,
	},
});

export default Header;