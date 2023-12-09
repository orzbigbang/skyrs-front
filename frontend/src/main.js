import './/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faTrain, faLocationDot, faHouse, faCaretDown, faSchool, faPerson, faPeopleRoof, faBuilding, faScrewdriverWrench, faPaw, faComputer, faAngleRight, faPhone, faMagnifyingGlass, faStar, faClockRotateLeft, faEnvelope, faAngleDown, faAnglesDown, faAnglesUp, faRotateLeft, faXmark, faWaveSquare, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faTrain, faLocationDot, faHouse, faCaretDown, faSchool, faPerson, faPeopleRoof, faBuilding, faHouse, faScrewdriverWrench, faPaw, faAngleLeft, faComputer, faLocationDot, faAngleRight, faPhone, faMagnifyingGlass, faStar, faClockRotateLeft, faEnvelope, faAngleDown, faAnglesDown, faAnglesUp, faRotateLeft, faXmark, faWaveSquare, faAnglesUp)

const app = createApp(App)

app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(createPinia())

app.mount('#app')
