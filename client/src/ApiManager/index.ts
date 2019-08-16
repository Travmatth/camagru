class ApiManager {
	authenticated: boolean = false;

	signup() {
		this.authenticated = true;
	}

	login() {
		this.authenticated = true;
		console.log("login")
	}

	logout() {
		this.authenticated = false;
		console.log("logout")
	}

	isLoggedIn() {
		return this.authenticated
	}
}

export default ApiManager