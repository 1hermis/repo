import { Item } from './components/item';
import data from './data.json'
import { Lista } from './components/Lista';
import { ItemDatail } from './components/ItemDetail';



 export default function App  (){
    const [selectedRepo, setselectedRepo] = React.useState(null)
    
    function handLeSelectItem(Item){
        console.log(Item.name);
        setselectedRepo(Item)
    }

   // console.log(selectedRepo);
    return(
        
        <div>
            <ItemDatail/>
            <hr/>
           <Lista repos = {data} handLeSelectItem={handLeSelectItem}/>
        </div>
    )
        
    
}

export {App}