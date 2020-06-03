import React, {useEffect, useState} from 'react';
import {FiTrash2} from 'react-icons/fi';
import Modal from 'react-modal';



import './styles.css';
import api from '../../services/api';
import Dialog from './Dialog';

import  styl from './styleModal.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  
};

export default function List(){

  const [tools, setTools] = useState([]);
  const [tag, setTag] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState('');
  const [link , setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  
  function openModal(e){
    e.preventDefault()
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
  
  useEffect(() => {
    loadTools()
  },[])

  function loadTools(){
    api.get('tools').then(response => setTools(
      response.data
      )
    )
  }

  function handleCheck(){
    var checkBox = document.getElementById("check");
    
    if(checkBox.checked === true){
      loadByTag(tag)
    }else{
      loadTools()
    }
  }

 async function loadByTag(tag){
  try{
    const response = await api.get(`tools?tag=${tag}`).then(response => setTools(
      response.data,

    ));
    console.log(tag);
  }catch(err){
    console.log(err);
  }
  }

  
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
    console.log(id);
  }

  async function handleAddTool(){
    const data = {
      title,
      link,
      description,
      tags,
    };

    try{
      await api.post('tools',data);

      const tool = data;
      setTools([...tools, tool])
      alert('Ferramenta salva com sucesso.');
      
    }catch(err){
      console.log(err);
    }
  }
  return(
    
    <div className="container">
     <div className="section">
        <h1>VUTTR</h1>
        <h2>Very Userful Tools to Remember</h2>
        <form onSubmit={loadByTag}>
          <input
            value={tag} 
            onChange = {e => setTag(e.target.value)}
            id="inputSeach" 
            placeholder="Search"
          />

          <div id="caixa">
            <input 
              onClick={handleCheck}
              id="check"
              type="checkbox" 
             />
            <label>search in tags only</label>
          </div>
          
          <button  onClick={openModal} id="bntAdcionar">Adicionar</button>
          <div>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
           >
          <div className="cont">
            <h1>+ ADD new tool</h1>
            <form onSubmit={handleAddTool}className="content"> 
              <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Tool name"
              />
                <input 
                  value={link}
                  onChange={e => setLink(e.target.value)}
                  placeholder="Tool link"
                />
                <textarea 
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Tool description"
                />
                <input 
                  value={tags}
                  onChange={e => setTags(e.target.value)} 
                  placeholder="Tags"
                />
                <button type="submit" id="btnAdd">Add tool</button>
              </form>
            </div>
          </Modal>
          </div>
        </form>
        <ul>
        {tools.map(tool => (
          <li key={tool._id} className="card">
            <h1>{tool.title}</h1>
            <p>{tool.description}</p>
            {tool.tags.map(tag => (
              <p id="tag">#{tag}</p>
            ))}
          <button onClick={() => handleDeleteTools(tool._id)} className="btnTrash">
            <FiTrash2 size={20}/>
             
          </button>
          
         
          
          </li>
        ))}   
        </ul>
        </div>
     </div>
  )
}