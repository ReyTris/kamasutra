import axios from "axios"


const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "d5520016-6f79-4ce2-b6b1-2ee4935c903b"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                   return response.data
                })
        
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status/`, { status: status})
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }

}


