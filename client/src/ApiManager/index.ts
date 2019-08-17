class ApiManager {
	async signup(email: string, username: string, password: string): Promise<boolean> {
		return await Promise.resolve(true)
	}

	async login(username: string, password: string): Promise<boolean> {
		return await Promise.resolve(true)
	}

	async logout(): Promise<boolean> {
		return await Promise.resolve(true)
	}
}

export default ApiManager