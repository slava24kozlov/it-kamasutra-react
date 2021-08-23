import instanceAxios from "./instanceAxios";

const profileAPI = {
  getProfile(id) {
    return instanceAxios.get(`profile/${id}`).then(response => {
      return response.data
    })
  }
}

export default profileAPI