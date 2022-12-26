import React from 'react'
import styles from './mainHeader.module.scss'

import frameimages  from 'static/img/main_img.png'
import mainimg from 'static/img/main.jpg'

const MainHeader = () => {
    return (
        <div className={styles.title_box_wrap}>
            { /* Header Main 페이지 입니다. 
                들어가는 내용 : 
                오프닝 메세지
                메인 사진
                예식 일시
                */}
            <img className={styles.frame} src={frameimages} />
            <img className={styles.main_img} src={mainimg} />
            <div className={styles.names}>
                범준 ♥︎ 채림&nbsp;결혼합니다
            </div>
            <div className={styles.wd_date}>2023년 02월 18일(토) 낮 12시 30분</div>
            <div className={styles.wd_info}>더리버사이드호텔 7층 콘서트홀</div>
        </div>
    )
}

export default MainHeader