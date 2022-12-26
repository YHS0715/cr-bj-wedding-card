import React from 'react';
import styles from './mainMessage.module.scss'

const MainMessage = () => {
    return (
        <div style={{ width: '100%' }}>
            <div className={`${styles.backgroundImage} ${styles.inviteMsgBg}`}>
                <div className={styles.inviteMsg}>초대합니다</div>
            </div>
            <div className={`${styles.backgroundImage} ${styles.invitationTxt}`}>
                변함없는 서로가 좋아서,<br />
                변함없이 사랑하는 자신이 좋아서,<br />
                앞으로도 함께할 날들을 기대하며<br />
                평생을 약속합니다.<br />
                <br />
                주님 안에서 하나가 되는 뜻깊은 날에<br />
                여러분들의 축복이 함께 하기를 소망합니다.<br />
                오셔서 자리를 빛내주시면 감사하겠습니다.<br />
            </div>
            <div className={`${styles.backgroundImage} ${styles.pNameBg}`}>
                <div className={ 'pNameWrap' }>
                    <div className={'pName'}>
                        <div className={styles.pNameM}>
                            <span>박병근&nbsp;·&nbsp;김향란 <span className={styles.ps1}>의 장남</span> 범준</span>
                        </div>
                        <div className={styles.pNameW}>
                            <span>한성우&nbsp;·&nbsp;박효경 <span className={styles.ps1}>의 장녀</span> 채림</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainMessage