import React from 'react';
import {useNavigate} from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className='btn btn-primary' onClick={() = > {
        navigate("/");
      }}></button>
    </div>
  )
}

export default BackButton