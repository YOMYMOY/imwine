import axios from 'axios'

const apiURL = import.meta.env.VITE_API_URL

export const filterDrinksService = async (category) => {
    try {

        const url = `${apiURL}filter.php?c=${category}`
        const {data} = await axios.get(url)

        const drinks = data.drinks.map(drink => ({...drink, price: +((drink.idDrink / 10).toFixed(0))}))
        return drinks || []
        
    } catch (error) {
        throw new Error("Hubo un error al obtener la bebida")
    }
}

export const getRecipeService = async (idDrink) => {
    try {

        const url = `${apiURL}lookup.php?i=${idDrink}`
        const {data} = await axios.get(url)

        return data.drinks[0] || {}
        
    } catch (error) {
        throw new Error("Hubo un error al obtener la receta")
    }
}