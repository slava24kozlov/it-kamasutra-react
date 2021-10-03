import axios from "axios";

export const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'b9d1e421-196c-4a79-b87a-b6c343077786'
  }
})

export const authAPI = {
  checkAuth() {
    return instanceAxios.get('auth/me').then(response => {
      return response.data
    })
  }
}

export const profileAPI = {
  getProfile(id) {
    return instanceAxios.get(`profile/${id}`).then(response => {
      return response.data
    })
  },
  setStatus(status) {
    return instanceAxios.put('profile/status', {status}).then(response => {
      return response.data
    })
  },
  getStatus(id) {
    return instanceAxios.get(`profile/status/${id}`)
  }
}

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },

  follow(id) {
    return instanceAxios.post(`follow/${id}`).then(response => {
      return response.data.resultCode
    })
  },

  unfollow(id) {
    return instanceAxios.delete(`follow/${id}`).then(response => {
      return response.data.resultCode
    })
  }
}


