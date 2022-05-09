import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (       
    <i className="fas fa-arrow-left flex-shrink-1" onClick={ () => {navigate("/")}}></i>    
  )
}

export default BackButton