import React, {useRef } from 'react'

interface ITodoForm{
    onAdd(title:string):void
}
const TodoForm:React.FC<ITodoForm> = (props) => {

    const ref = useRef<HTMLInputElement>(null) 

    // const [title , setTitle]= useState<string>('')
    
    // const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event:React.KeyboardEvent) =>{

        if(event.key==='Enter'){
            props.onAdd(ref.current!.value)
            ref.current!.value=''
            // console.log(title)
            // setTitle("")
        }
       
    }

    return (
        <div className="input-field mt1">
            <input type="text"  
            id="title" 
            ref={ref}
            // value={title} 
            // onChange={changeHandler} 
            onKeyPress={keyPressHandler}/>
            <label htmlFor="title" className="active ">Vvedite nazvanie delo</label>
        </div>
    )
}

export default TodoForm
