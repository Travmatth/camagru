class ApiManager {
	async signup(email: string, username: string, password: string): Promise<boolean> {
		console.log('signup')
		return await Promise.resolve(true)
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