import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Theme from '../utils/Theme';

const BigButton = ({ style, children, ...props }) => {
  return (
    <Button
      mode="contained"
      style={[styles.button, style,]}
      labelStyle={styles.labelStyle}
      loading={props.loading}
      {...props}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
	button: {
		width: '100%',
		marginVertical: 10,
		backgroundColor: Theme.BLUE
	},
	labelStyle: {
		fontWeight: 'bold',
		fontSize: 15,
		lineHeight: 26,
		color: Theme.SUPER_FADED_BLUE
  }
});

export default BigButton;
