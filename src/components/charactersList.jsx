import React from 'react'
import { useEffect,useState } from 'react'
import Character from './character';

function NavPage(props){
    return (
        <header className='d-flex justify-content-between aling=items-center'>
            
            <button 
                className='btn btn-primary btn-sm'
                onClick={() => props.setPage(props.page - 1)}
                >
                Previos:  
                {
                      props.page > 0 ? props.page - 1 : 1
                }
            </button>

            <p>Page : 
                {        
                    props.page > 0 ? props.page : 1
                }      
            </p>

            
             <button 
                className='btn btn-primary btn-sm'
                onClick={() => props.setPage(props.page + 1)}
                >
            
                Next: 
                {
                   props.page >=  0 ? props.page + 1 : 1
                }
                </button> 
            
            
        </header>
    )
}

function charactersList() {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    useEffect(() => {
    async function fetchData(){
        if(page <= 0){
            setPage(1)
        } 
        else if(page >= 42){
            setPage(41)
        }

      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
        setCharacters(data.results)
    }
    fetchData()
    },[page]);

  return (
    <div className='container' >
        <NavPage page={page} setPage={setPage}/>
        <div className='row'>
            {
                characters.map((character) => {
                    return(
                        <div className='col-md-4' key={character.id}>
                            <Character character={character}/>
                        </div>
                    )
                })
            }
        </div>
        <NavPage page={page} setPage={setPage}/>
    </div>
  )
}

export default charactersList