import ReactDom from 'react-dom/client';
import {App} from './App'


const rootelement = document.querySelector('#root');

const root = ReactDom.createRoot(rootelement);

root.render(
    
    <App/>
)
    
