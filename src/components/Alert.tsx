import { ReactNode } from 'react'
interface Props
{
    text:string;
}


const Alert=({text}:Props)=>{
    return(
        <div className='alert alert-warning'>
            <h5> Great is thy Faithfulness | {text}</h5>

        </div>
    )
}

interface NodeProps{
    children:ReactNode
}
export const Node=({children}:NodeProps)=>{
    return(
        <div className='alert alert-danger'>
          
          {children}

        </div>
    )
}


//Passing HTML Contents as Properties 

export default Alert