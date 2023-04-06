import { StyleSheet, Image } from 'react-native';

const Logo = () => {
  return <Image source={require('../assets/images/logo.png')} style={styles.image} />
};

const styles = StyleSheet.create({
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
});

export default Logo;