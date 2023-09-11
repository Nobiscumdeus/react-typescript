import React from 'react'

interface JokeItemProps
{
    joke:string;
}


const JokeItem:React.FC<JokeItemProps>=({joke})=>

    (

    
        <div className='card mb-3'>
            <div className='card-body'>
                <p className='card-text'> {joke} </p>

            </div>
        </div>
    )



export default JokeItem;