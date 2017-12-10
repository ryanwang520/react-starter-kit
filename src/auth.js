const auth = {
  isAuthenticated: localStorage.getItem('token'),
  async authenticate() {
    this.isAuthenticated = true
    localStorage.setItem('token', 'token')
  },
  async signout() {
    this.isAuthenticated = false
    localStorage.removeItem('token')
  },
}

export default auth
