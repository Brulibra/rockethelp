import auth from "@react-native-firebase/auth"

import { useState } from "react"
import { Alert } from "react-native"
import { VStack, Heading, Icon, useTheme } from "native-base"
import { Envelope, Key } from "phosphor-react-native"

import Logo from "../assets/logo_primary.svg"
import { Button } from "../components/Button"
import { Input } from "../components/Input"

export function SignIn() {
	const { colors } = useTheme()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	function handleSignIn(){
		if (!email || !password){
			return Alert.alert("Entrar", "Preencha email e senha")
		}


		console.log(email, password);
	}

	return (

		<VStack
			flex={1}
			alignItems="center"
			bg="gray.600" px={8}
			pt={24}
		>

			<Logo />

			<Heading
				color="gray.100"
				fontSize="xl"
				mt={20}
				mb={6}
			>
				Acesse sua conta {email}
			</Heading>

			<Input
				mb={4}
				placeholder="E-mail"
				onChangeText={setEmail}
				InputLeftElement={
					<Icon
					as={<Envelope color={colors.gray[300]} />}
					ml={4}
					/>}
			/>

			<Input
				mb={8}
				placeholder="Senha"
				onChangeText={setPassword}
				InputLeftElement={
					<Icon
						as={<Key color={colors.gray[300]} />}
						ml={4}
					/>}
					secureTextEntry
			/>

			<Button
				title="Entrar"
				w="full"
				onPress={handleSignIn}
			/>

		</VStack>
	)
}
