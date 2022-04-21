const fetchBeerUrl = "https://random-data-api.com/api/beer/random_beer";
const fetchUserUrl = "https://random-data-api.com/api/users/random_user";

export default {
    async fetchBeer() {
        const response = await fetch(fetchBeerUrl)
        if (!response.ok) {
            console.error('Не удалось загрузить данные с сервера')
            return new Error('Не удалось получить данные')
        }
        return response.json()
    },
    async fetchUser() {
        const response = await fetch(fetchUserUrl)
        if (!response.ok) {
            console.error('Не удалось загрузить данные с сервера')
            return new Error('Не удалось получить данные')
        }
        return response.json()
    }
}