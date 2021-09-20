import React ,{useState} from 'react'
import TodoList from './TodoList';

export default function Todo() {
    const[inputList,setInputList]= useState();
    const [Items, setItems] = useState([]);
    const [mode, setmode] = useState('create');
    const [selectedId,setselectedId ] = useState(null)
    const itemEvent = (e) => {
        setInputList(e.target.value);
    }
    const items = () => {
        if(mode === 'create'){
            setItems([...Items,inputList]);
               setInputList('')
        }else if(mode==='update'){
            let newItems = [...Items];
            newItems[selectedId] = inputList;
            console.log('new items', newItems)
            setItems(newItems)
            // this.setState({value:''}) 
            setInputList('')
    }
    setmode( 'create')
    }
    const deleteItem =(id) => {
        console.log("delete ")
        const update=Items.filter((ele,index)=>{
             return index !== id;
            });
            setItems(update);
    }
    const updateCity = (id) => {
        console.log('id', id)
   
        setselectedId(id)
        setmode('update')
        // setState({mode:'update'})
        setInputList(Items[id])
        console.log("update",setInputList)
    }
    
    
    
    return (
        <div className="mb-4 p-5 mx-auto shadow col-md-4">
            <h1>Todo list</h1>
            <input type="text" placeholder="add a items"  value={inputList} onChange={itemEvent} ></input>
            <button onClick={items}>{mode ==='create'? 'ADD': 'Update'}</button>
            <h6>Todo items</h6>
            <ul class="list-group">
                {Items.map((el,index)=>
                {
                
             return   <TodoList key={index} text={el} id={index}
          onSelect={deleteItem}
          onEdit={updateCity}/>
                })}
            </ul>
        </div>
    )
}
