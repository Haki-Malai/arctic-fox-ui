import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import Theme from '../utils/Theme';

const BigInput = ({ errorText, description, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        mode="outlined"
        style={styles.input}
        activeOutlineColor={Theme.BLUE}
        textColor={Theme.color}
        theme={{ colors: { text: Theme.color } }}
        {...props}/>
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
		backgroundColor: Theme.SUPER_FADED_BLUE,
  }
});

export default BigInput;
