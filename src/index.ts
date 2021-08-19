import { using, h } from "forest"


using(document.getElementById('app'), () => {
  h('div', { text: 'It\'s just a dream' })
})