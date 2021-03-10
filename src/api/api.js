import axios from "axios"


const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "72ddafc9-88b6-42f1-9082-8e8bfc91cfe9"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                   return response.data
                })
        
    }
}

// export const getUsers = (currentPage, pageSize) => {
//     return (
//         instance.get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(response => {
//                 return response.data
//             })
//     )
// }

