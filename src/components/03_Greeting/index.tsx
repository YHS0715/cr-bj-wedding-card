import React from 'react';
import style from './greeting.module.scss';

import profile from 'static/img/couple_profile.jpg'

const Greeting = () => {
    return (
        <div className={style.contactWrap}>
            <div className={style.contactInner}>
                <div className={style.coupleBox}>
                    <div className={`${style.box} ${style.no1}`}>
                        박범준
                    </div>
                    <div className={`${style.box} ${style.no2}`}>
                        한채림
                    </div>
                </div>
            </div>
            {/* <img src = {profile} className={style.profileImg}/> */}
        </div>
    )
}

export default Greeting