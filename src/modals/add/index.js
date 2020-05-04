import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function Add(){
  const [title, setTitle] = useState('');
  const [link , setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const history = useHistory();

  async function handleAddTool(e){
    e.preventDefault();

    const data = {
      title,
      link,
      description,
      tags,
    };

    try{
      await api.post('tools',data);
      alert('Ferramenta salva com sucesso.');
      history.goBack();
    }catch(err){
      console.log(err);
    }
  }


  return(
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
  )
}

