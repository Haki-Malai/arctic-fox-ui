import { memo } from 'react';
import { StyleSheet, ImageBackground, KeyboardAvoidingView } from 'react-native';
import Theme from '../utils/Theme';

const Background = ({ children }) => (
	<ImageBackground style={styles.background}>
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			{children}
		</KeyboardAvoidingView>
	</ImageBackground>
);

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: '100%',
		backgroundColor: Theme.SUPER_FADED_BLUE
	},
  container: {
		flex: 1,
		padding: 20,
		width: '100%',
		maxWidth: 340,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default memo(Background);
