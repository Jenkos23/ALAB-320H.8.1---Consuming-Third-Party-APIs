

export default async function GetAllStarships(){
    const url = 'https://swapi.dev/api/starships/';
  try {
     const  response =  await fetch(url);
     if (!response.ok){
        throw new Error('Error in network response')

     }

     const data = await response.json();
     return data.results;


  } catch (error) {
    console.error('Failed to fetch starships', error);
    
  }


    

   
}