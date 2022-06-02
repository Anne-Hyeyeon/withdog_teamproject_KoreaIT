import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';
import { faBone } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';


function DogIcons(props) {
    const style = {
        marginTop: 30,
        display: 'block',
    }
    return (
        <div style={{ marginTop:100 }}>
            {/* 귀여운 강아지 */}
            <FontAwesomeIcon style={style} fontSize='50' icon={faDog} />
            {/* 방패 속 강아지 */}
            <FontAwesomeIcon style={style}fontSize='50'  icon={faShieldDog} /> 
            {/* 뼈다구 */}
            <FontAwesomeIcon style={style} fontSize='50'  icon={faBone} /> 
            {/* 개발바닥 */}
            <FontAwesomeIcon style={style} fontSize='50'  icon={faPaw} /> 
        </div>
    );
}

export default DogIcons;