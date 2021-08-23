import instanceAxios from "./instanceAxios";

const usersAPI = {
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

export default usersAPI