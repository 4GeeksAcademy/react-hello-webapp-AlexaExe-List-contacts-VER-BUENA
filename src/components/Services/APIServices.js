export const getContacts = async (dispatch) => {
    const response = await fetch(`https://thesimpsonsapi.com/api/characters`)
    const data = await response.json()
    console.log("data de la API", data);
    dispatch({type: 'get_characters', payload: data.results});
     
    }
    
// ESTA ES PARA DESIGNAR LA LOCACION
// const getLocation = async (dispatch) => {
// const response = await fetch(`https://thesimpsonsapi.com/api/location`),
// const data = await response.json()
//     console.log(data);
//     dispatch ({type: 'get_location', payload: data})
     
//     }

