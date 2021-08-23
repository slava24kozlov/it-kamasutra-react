import instanceAxios from "./instanceAxios";


const authAPI = {
  checkAuth() {
    return instanceAxios.get('auth/me').then(response => {
      return response.data
    })
  }
}

export default authAPI