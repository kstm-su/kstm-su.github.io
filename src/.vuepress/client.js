import { defineClientConfig } from 'vuepress/client'
import ContactForm from './components/ContactForm.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ContactForm', ContactForm)
  },
})