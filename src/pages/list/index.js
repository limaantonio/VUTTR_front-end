import React, {useEffect, useState} from 'react';
import {FiTrash2} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function List(){
  const [tools, setTools] = useState([]);
 
  
  
  useEffect(() => {
   api.get('tools').then(response => setTools(
       response.data
     )
   )
  },[])
  async function handleDeleteTools(id){
    try{
      await api.delete(`tools/${id}`);

      const toolsIndex = tools.findIndex(t => t.id === id);
      const tool = [...tools];

      tool.splice(toolsIndex, 1);
      setTools(tool);
     
     
    }catch(err){
      alert('Ocorreu um erro ao deletar essa ferramenta, tente novamente.')
    }
  }
  

  return(
    <div className="container">
     <div className="section">
        <h1>VUTTR</h1>
        <h2>Very Userful Tools to Remember</h2>
        <form>
          <input id="inputSeach" placeholder="Search"></input>
          <div id="caixa">
            <input id="check"type="checkbox"/>
            <label>search in tags only</label>
          </div>
          <Link to='/add'>
            <button id="bntAdcionar">Adicionar</button>
          </Link>
        </form>
        <ul>
        {tools.map(tool => (
        
          <li key={tool.id} className="card">
            <h1>{tool.title}</h1>
            <p>{tool.description}</p>
            {tool.tags.map(tag => (
              <p id="tag">#{tag}</p>
            ))}
          <button onClick={() => handleDeleteTools(tool.id)} className="btnTrash">
            <FiTrash2 size={20}/>
          </button>
          </li>
        ))}   
        </ul>
        </div>
     </div>
  )
}