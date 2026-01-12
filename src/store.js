export const initialStore=()=>{
  return{

    characters: [],
    location: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_characters':

      return {
        ...store,
        characters: action.payload
      };

      case 'get_location':

      return {
        ...store,
        location: action.payload
      };

    default:
      throw Error('Unknown action.');
  }    
}
