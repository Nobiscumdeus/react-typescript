import React, { useState, useEffect } from "react";

import JokeItem from "./JokeItem";

const JokeList: React.FC = () => {
    const [jokes, setJokes] = useState<string[]>([]);

    useEffect(() => {
        //Fetching Jokes from the Chuck Norris APi
      
        fetch('https://api.chucknorris.io/jokes/random/5')
        .then((response)=>{
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            return response.json();
        })
        .then((data)=>{
            //Check the data structure and handle it
            if(Array.isArray(data)){
                setJokes(data.map((joke:any)=>joke.value));
            }else{
                //handle the unexpected data format
                console.error('Unexpected data format:',data)
            }
        })
        .catch((error)=>{
            //handle network error or other issues
            console.error('Error: ',error)
            
        })
    }, []);

    return (
        <div className="container mt-5">
            <h3>Chuck Norris Jokes </h3>
            <ul>
                {jokes.map((joke, index) => (
                    <li key={index}>
                        <JokeItem joke={joke} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JokeList 
