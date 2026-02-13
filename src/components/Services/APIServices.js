const BASE_URL = "https://playground.4geeks.com/contact"
const AGENDA = "AlexaExe"

//GET
export const getContacts = async(dispatch) =>{
    const response = await fetch(`${BASE_URL}/agendas/${AGENDA}/contacts`);
    const data = await response.json();
    console.log("Contactos obtenidos", data);
    dispatch({type:'get_contacts', payload: data.contacts});

};


//POST - CREAR CONTACTO
export const createContact = async (dispatch, contact) => {
    await fetch(`${BASE_URL}/agendas/${AGENDA}/contacts`, {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {"Content-Type": "application/json"} 
         
    });

    getContacts(dispatch);
};
    

//PUT
export const updateContact = async (dispatch, contactId, contact) => {
    await fetch(`${BASE_URL}/agendas/${AGENDA}/contacts/${contactId}`,{
        method:"PUT",
        body: JSON.stringify(contact),
        headers: {"Content-Type": "application/json"}

    });
    getContacts(dispatch);

};

//DELETE

export const deleteContact = async (dispatch, contactId) => {
await fetch(`${BASE_URL}/agendas/${AGENDA}/contacts/${contactId}`,{
    method:"DELETE"
    });
    getContacts(dispatch);

};