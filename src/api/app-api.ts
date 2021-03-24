import axios from "axios";

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://www.mrsoft.by/'
})

export const appApi = {
    getData() {
        return instance.get("data.json")
    }
}