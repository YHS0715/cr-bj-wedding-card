import { Routes, Route } from 'react-router-dom'
import styles from './Routes.module.scss'

import Main from './Main'
import Page404 from './Page404'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
        <Route path='/' element={<Main />} />
          <Route path='/cr-bj-wedding-card/' element={<Main />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
