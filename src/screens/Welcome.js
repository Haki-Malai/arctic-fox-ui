import { Background, Logo, Header, BigButton } from "../components";

const Welcome = ({ navigation }) => {
	return (
		<Background>
			<Logo />
			<Header>Arctic Fox</Header>
			<BigButton onPress={() => navigation.navigate('Login')}>
				Login
			</BigButton>
			<BigButton onPress={() => navigation.navigate('Register')}>
				Sing Up
			</BigButton>
		</Background>
	);
};

export default Welcome;
