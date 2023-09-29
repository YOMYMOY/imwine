import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { filterDrinksService, getRecipeService } from "../services/drinks.service";

const DrinksContext = createContext(null)

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([])
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState([])
    const [idDrink, setIdDrink] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const getDrinks = async (data) => {
        try {

            const {ingredient, category} = data

            setLoading(true)

            const drinksData = await filterDrinksService(category)

            setDrinks(drinksData)
            
        } catch (error) {
            console.error()
        } finally {
            setLoading(false)
        }
    }

    const getRecipe = async (idDrink) => {

        if(!idDrink) return

        try {

            setLoading(true)

            const recipeData = await getRecipeService(idDrink)

            setRecipe(recipeData)
            
            
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
      getRecipe(idDrink)
    }, [idDrink])

    const handleIdDrinkClick = (id) => {
        setIdDrink(id)
    }
    
    const handleShowModalClick = () => {
        setShowModal((show) => !show)
    }

    const contextValue = {
        drinks,
        getDrinks,
        loading,
        handleIdDrinkClick,
        showModal,
        handleShowModalClick,
        recipe
    }

  return (
    <DrinksContext.Provider value={contextValue}>
        {children}
    </DrinksContext.Provider>
  )
}

DrinksProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export {
    DrinksContext,
    DrinksProvider
}