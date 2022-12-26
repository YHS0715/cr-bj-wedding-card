import React from 'react'
import style1 from '../../styles/components/Page404.module.scss'

const Page404 = () => {
    return (
        <div className={style1.errorWrap}>
            <div className={style1.in}>
                <div className={style1.tit}>
                    <img src="https://cdn-icons-png.flaticon.com/512/7486/7486803.png" alt="404" />
                </div>
                <div className={style1.tit01}>찾을 수 없는 페이지입니다.</div>
                <div className={style1.tit02}>사라진 페이지 또는<br />잘못된 경로로 접속한 페이지입니다.</div>
            </div>
        </div>
    )
}

export default Page404