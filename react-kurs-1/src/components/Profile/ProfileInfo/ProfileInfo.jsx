import React from 'react';
import cl from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div className={cl.ProfileInfo}>
                <img src='https://proprikol.ru/wp-content/uploads/2021/05/temnye-kartinki-25.jpg'/>
            </div>
            <div className={cl.descriptionBlock}>
                ava+descriptions
            </div>
        </div>
    )
}

export default ProfileInfo;