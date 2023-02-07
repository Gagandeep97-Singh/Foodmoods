
const key="679ee28f-592f-46a0-b199-4a28160b049f"
// const key = process.env.REACT_APP_API_KEY
 export const apidata=(query)=>`https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=${key}`
export const singleRecipeData=(id)=>`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${key}`