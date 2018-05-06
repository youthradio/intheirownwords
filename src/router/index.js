import Vue from 'vue'
import Router from 'vue-router'
import MHeader from '@/components/MHeader'
import MFooter from '@/components/MFooter'
import MSection from '@/components/MSection'
import MConversation from '@/components/MConversation'
import MTopics from '@/components/MTopics'
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
        topics: MTopics,
        footer: MFooter
      },
      props: {
        section: true,
        topics: true
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
        profile: MPersonProfile,
        topics: MTopics
      },
      props: {
        profile: true,
        topics: true
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
