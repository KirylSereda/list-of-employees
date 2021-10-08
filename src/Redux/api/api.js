import axios from "axios";


const instance=axios.create ({
    baseURL:'https://reqres.in/api/users?per_page=12'
})

export const usersAPI={
    getUsers () {
        return instance.get()
        .then (response => {
            return response.data;
        });
    }
}