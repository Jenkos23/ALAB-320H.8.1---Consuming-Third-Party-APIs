import useStarships from "./useStarships";
import "../styles/App.css"

export default function Home(){
    const {starships, loading, error} = useStarships();
    const content = ()=> {

    return loading ? (<>Loading...</>) : error ? (<>{error}</>): (
        <div className="starship-cards">
        {starships.map(starship =>  (
            <div key = {starship.name} className="starship-card">

                <h2>{starship.name}</h2>
                <p> model: {starship.model}</p>
                <p>Manufacturer: {starship.manufacturer}</p>
                <p>Crew: {starship.crew}</p>



            </div>
         ))},

      </div>
    )
    
    
  }

    
    return(
      
       <div> {content()}</div>
    );






}