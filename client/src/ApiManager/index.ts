class ApiManager {
	authenticated: boolean = false;

	login() {
		this.authenticated = true;
	}

	logout() {
		this.authenticated = false;
	}

	isLoggedIn() {
		return this.authenticated
	}
}

export default ApiManager