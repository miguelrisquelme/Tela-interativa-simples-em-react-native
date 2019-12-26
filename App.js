import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Button, Alert } from 'react-native';

export default class DisplayAnImage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					style={styles.imagem}
					source={require('./src/img/faustao-monstro.jpg')}
				/>
				<Text style={styles.titulo}>
					Olá amigos, bora programar
				</Text>
				<Button
					color="green"
					title="Lance a braba"
					onPress={() => Alert.alert('Braba lançada com sucesso')}
				>
				</Button>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		margin: 20,
	},

	imagem: {
		marginTop: 50,
		marginLeft: 20,
		width: 300,
		height: 300,
	},

	titulo: {
		textAlign: "center",
		color: "green",
		fontSize: 50,
		fontStyle: 'italic',
		marginBottom: 30,
	},

})