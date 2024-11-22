

export default async function GetAllStarships(){
    const url = 'https://swapi.dev/api/starships/';
  try {
     const  response =  await fetch(url);
     if (!response.ok){
        
     }

  } catch (error) {
    console.error(error)
    
  }


    

   
}