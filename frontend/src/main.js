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
library.add(faUserSecret, faTrain, faLocationDot, faHouse, faCaretDown, faSchool, faPerson, faPeopleRoof, faBuilding, faHouse, faScrewdriverWrench, faPaw, faAngleLeft, faComputer, faLocationDot, faAngleRight, faPhone, faMagnifyingGlass, faStar, faClockRotateLeft, faEnvelope, faAngleDown, faAnglesDown, faAnglesUp, faRotateLeft, faXmark, faWaveSquare)

const app = createApp(App)

// 将全局变量挂载到根实例上
const apiURL = "http://13.112.28.13:8000/api/"
app.provide('apiURL', apiURL);

app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(createPinia())

app.mount('#app')
