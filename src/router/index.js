import Vue from 'vue'
import Router from 'vue-router'
import MHeader from '@/components/MHeader'
import MFooter from '@/components/MFooter'
import MSection from '@/components/MSection'
import MCredits from '@/components/MCredits'
import MConversation from '@/components/MConversation'
import MTopics from '@/components/MTopics'
import MPersonProfile from '@/components/MPersonProfile'

Vue.use(Router)

// https://github.com/vuejs/vue-router/blob/dev/examples/scroll-behavior/app.js
const scrollBehavior = function (to, from, savedPosition) {
  if (to.name === 'Conversation' && (from.name === 'Home')) {
    // if coming from home and to conversation
    return null
  }
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    return new Promise((resolve, reject) => {
      // check if any matched route config has meta that requires scrolling to top
      const scrollTo = to.meta.scrollTo
      if (scrollTo) {
        const el = document.querySelector(scrollTo)
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  }
}

const router = new Router({
  mode: 'history',
  scrollBehavior,
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        scrollTo: '#menu'
      },
      components: {
        header: MHeader,
        section: MSection,
        topics: MTopics,
        footer: MFooter
      },
      props: {
        people: true,
        section: true,
        topics: true
      }
    },
    {
      path: '/credits',
      name: 'Credits',
      meta: {
        scrollTo: '#credits'
      },
      components: {
        header: MHeader,
        section: MCredits,
        footer: MFooter
      }
    },
    {
      path: '/conversation/:topic',
      name: 'Conversation',
      meta: {
        scrollTo: '#topics'
      },
      components: {
        header: MHeader,
        section: MSection,
        topics: MTopics,
        conversation: MConversation,
        footer: MFooter
      },
      props: {
        conversation: true,
        topics: true,
        section: true
      }
    },
    {
      path: '/person/:person',
      name: 'PersonRoute',
      meta: {
        scrollTo: '#menu'
      },
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
      redirect: '/'
    }
  ]
})

export default router
