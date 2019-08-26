import Amplify, { Auth } from 'aws-amplify';
import { ISignUpResult } from "amazon-cognito-identity-js";


// You can get the current config object
class ApiManager {
	constructor() {
		Amplify.configure({
			Auth: this.initAuth(),
		});
	}

	initAuth() {
		return ({
			// REQUIRED - Amazon Cognito Region
			region: process.env.AWS_COGNITO_REGION,
			// OPTIONAL - Amazon Cognito User Pool ID
			userPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
			// OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
			userPoolWebClientId: process.env.AWS_COGNITO_USER_POOL_APP_CLIENT_ID,
			// OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
			mandatorySignIn: true,
		});
	}

	async signup(email: string, username: string, password: string): Promise<ISignUpResult> {
		return await Auth.signUp({ username, password, attributes: { email } })
	}

	async login(username: string, password: string): Promise<boolean> {
		console.log('login')
		return await Promise.resolve(true)
	}

	async logout(): Promise<boolean> {
		console.log('logout')
		return await Promise.resolve(true)
	}

	async confirmSignup(authenticationCode: string): Promise<boolean> {
		console.log('confirmSignup')
		return await Promise.resolve(true)
	}
}

export default ApiManager