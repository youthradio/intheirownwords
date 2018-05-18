import Vue from 'vue'
import Router from 'vue-router'
import MHeader from '@/components/MHeader'
import MFooter from '@/components/MFooter'
import MSection from '@/components/MSection'
import MCredits from '@/components/MCredits'
import MConversation from '@/components/MConversation'
import MTopics from '@/components/MTopics'
import MPersonProfile from '@/components/MPersonProfile'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

// https://github.com/vuejs/vue-router/blob/dev/examples/scroll-behavior/app.js
const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}

    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash

      // specify offset of the element
      // if (to.hash === '#anchor2') {
      //   position.offset = { y: 100 }
      // }

      if (document.querySelector(to.hash)) {
        return position
      }

      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }

    return new Promise((resolve, reject) => {
      // check if any matched route config has meta that requires scrolling to top
      let scrollTo = to.meta.scrollTo || false
      console.log(scrollTo)
      if (scrollTo) {
        if (scrollTo === 'top') {
          position.x = 0
          position.y = 0
        } else {
          const el = document.querySelector(scrollTo)
          position.x = el.getBoundingClientRect().x
          position.y = el.getBoundingClientRect().y
        }
      }
      // router.app.$root.$once('triggerScroll', () => {
      resolve(position)
      // })
    })
  }
}

const router = new Router({
  // mode: 'history',
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        scrollTo: 'top'
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
        scrollTo: 'credits'
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
        scrollToTop: true
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
      components: {
        notfound: NotFoundComponent
      }
    }
  ]
})

export default router
