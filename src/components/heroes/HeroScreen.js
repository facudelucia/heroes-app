import React,{useMemo} from 'react';
import getHeroById from "../../selectors/getHeroById";
import { useParams, Redirect} from 'react-router-dom';

const HeroScreen = ({history}) => {
    const useparams = useParams();
    const {heroeId} = useparams;
    
    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
    

    if (!hero){
        return <Redirect to="/" />;
    }
    const handleReturn = () => {
        if(history.length <= 2){
            history.push("/");
        }else{
            history.goBack();
        }
    }
    const {alter_ego, characters, first_appearance, id, publisher, superhero} = hero;
    return ( 
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearence: </b>{first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>
                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
     );
}
 
export default HeroScreen;