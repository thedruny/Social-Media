import axios from 'axios';


const instance = axios.create({
      withCredentials: true,
      baseURL: "https://social-network.samuraijs.com/api/1.0/",
      headers: { "API-KEY": "877ec7b8-009a-44b1-9f94-b4b8ea47f202" },
})

export const usersAPI = {
      getUsers(currentPage, pageSize) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            }).then(response => {
                  return response.data;
            });
      },
      follow(userId) {
            return instance.post(`follow/${userId}`)
      },
      unfollow(userId) {
            return instance.delete(`follow/${userId}`)
      },
      getProfile(userId) {
            return instance.get(`profile/${userId}`)
      }
};

export const authAPI = {
      me() { return instance.get(`auth/me`) }
};
