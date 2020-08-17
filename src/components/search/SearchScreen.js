import React,{useMemo} from 'react';
import HeroCard from "../heroes/HeroCard";
import { useLocation } from 'react-router-dom';
import {useForm} from "../hooks/useForm";
import queryString from 'query-string';
import getHeroByName from "../../selectors/getHeroByName";

const SearchScreen = ({history}) => {
    const location = useLocation();
    
    const {q = ""} = queryString.parse(location.search);
    
    const [formValues, handleInputChange] = useForm({
        search: q
    })
    
    const {search} = formValues
    
    const heroesFiltered = useMemo(() => getHeroByName(q), [q])
    
    
    const handleSubmit= (e)=>{
        e.preventDefault()
        if(search.trim() === "") return;
        history.push(`?q=${search}`)
    } 
  
    return ( 
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form
                        onSubmit={handleSubmit}
                      
                    >
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="search"
                            value={search}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {(q==="") && <div className="alert alert-info">Search a Hero</div>}
                    {(q !== "" && heroesFiltered.length === 0) && <div className="alert alert-danger">There is no a hero with {q}</div> } 
                    {
                        heroesFiltered.map(hero => {
                            return <HeroCard 
                                key={hero.id}
                                hero={hero}
                            />
                        })
                    }
                </div>
            </div>
        </div>
     );
}
 
export default SearchScreen;