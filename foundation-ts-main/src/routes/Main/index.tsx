import React from 'react'
import MainHeader from 'components/01_MainHeader'
import MainMessage from 'components/02_MainMessage/MainMessage'
import Greeting from 'components/Greeting'
import CalendarDday from 'components/CalendarDday'
import AccountList from 'components/AccountList'
import PhotoGallary from 'components/PhotoGallary'
import Notice from 'components/Notice'
import GuestMemo from 'components/GuestMemo'
import MainFooter from 'components/MainFooter'


const Main = () => {
  return (
    <>
          {/* 메인 메세지 */}
          <MainHeader />
          {/* 일정 안내 및 안내글. */}
          <MainMessage />
          {/* 신랑 신부 감사인사.  */}        
          <Greeting />  
          {/* 디데이 캘린더. */}
          <CalendarDday />
          {/* 계좌 안내. */}
          <AccountList />
          {/* 갤러리형 사진 */}
          <PhotoGallary />
          {/* 식순, 오시는길, 안내사항  */}
          <Notice />
          {/* 방명록. */}
          <GuestMemo />
          {/* footer 공유하기, */}
          <MainFooter />
    </>
  )
}

export default Main
