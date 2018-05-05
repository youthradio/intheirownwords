import Vue from 'vue'
import Router from 'vue-router'
import MHeader from '@/components/MHeader'
import MFooter from '@/components/MFooter'
import MSection from '@/components/MSection'
import MConversation from '@/components/MConversation'
import MPersonProfile from '@/components/MPersonProfile'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        header: MHeader,
        section: MSection,
        footer: MFooter
      },
      props: {
        section: true
      }
    },
    {
      path: '/conversation/:topic',
      name: 'Conversation',
      components: {
        header: MHeader,
        section: MSection,
        conversation: MConversation,
        footer: MFooter
      },
      props: {
        conversation: true,
        section: true
      }
    },
    {
      path: '/person/:person',
      name: 'PersonRoute',
      components: {
        header: MHeader,
        profile: MPersonProfile
      },
      props: {
        profile: true
      }
    },
    {
      path: '*',
      components: {
        notfound: NotFoundComponent
      }
    }
  ]
})
