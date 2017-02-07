export let state;


export function managePets(state = { pets: [] }, action){
  switch (action.type) {
    case 'ADD_PET':
      return {...state, pets: [ ...state.pets, action.payload]
      }
    case 'REMOVE_PET':
      var new_pets = state.pets.filter((item) => item.id !== action.payload)
      return {...state, pets: new_pets}
    default:
      return state

    }
  }


export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){

}
