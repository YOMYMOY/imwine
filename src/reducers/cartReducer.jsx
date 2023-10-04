import { types } from '../types'

export const cartReducer = (state = [], action) => {
  const item = state.find(item => item.idDrink === action.payload.idDrink) 

  switch (action.type) {
    case types.addItem:
      return item
      ?
      state.map(item => item.idDrink === action.payload.idDrink
        ? {
          ...item,
          quantity : item.quantity + 1
        }
        :
        item
        )
      :
      [
        ...state,
        {
          ...action.payload,
          quantity : 1
        }
      ]


    case types.removeItem:
      return action.payload.quantity > 1
      ?
      state.map(item => item.idDrink === action.payload.idDrink
        ? {
          ...item,
          quantity : item.quantity - 1
        }
        :
        item
        )
      :
      state.filter(item => item.idDrink !== action.payload.idDrink)

      case types.removeAll:
      return state.filter(item => item.idDrink !== action.payload.idDrink)
    default:
      return state
  }
}

//npx tss --init