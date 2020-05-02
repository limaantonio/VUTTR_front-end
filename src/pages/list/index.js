import React from 'react';
import {FiTrash2} from 'react-icons/fi';

import './styles.css';
import { Link } from 'react-router-dom';

export default function List(){
  
  return(
    <div className="container">
     <div className="section">
        <h1>VUTTR</h1>
        <h2>Very Userful Tools to Remember</h2>
        
        <input id="inputSeach" placeholder="Search"></input>
        <Link to='/add'>
         <button id="bntAdcionar">Adicionar</button>
        </Link>
      
        <div className="card"> 
          <h1>Notion</h1>
          <button className="btnTrash">
            <FiTrash2 size={20}/>
          </button>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti? Veritati</p>
          <p>orem ipsum dolor sit amet consectetu orem ipsum dolor sit amet consectetu</p>
         
        </div>
        <div className="card"> 
          <h1>Notion</h1>
          <button className="btnTrash">
          <FiTrash2 size={20}/>
          </button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti? Veritati</p>
          <p>orem ipsum dolor sit amet consectetu orem ipsum dolor sit amet consectetu</p>
        </div>
        <div className="card"> 
          <h1>Notion</h1>
          <button className="btnTrash">
          <FiTrash2 size={20}/>
          </button>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti? Veritati</p>
          <p>orem ipsum dolor sit amet consectetu orem ipsum dolor sit amet consectetu</p>
        </div>
     </div>
    </div>
  )
}