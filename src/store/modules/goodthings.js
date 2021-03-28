const state = {
  menuitems: [{
      id: 1,
      title: "Home",
      link: "/"
    },
    {
      id: 2,
      title: "What we do",
      link: "/what"
    },
    {
      id: 3,
      title: "The digital divide",
      link: "/digital"
    },
    {
      id: 4,
      title: "Get involved",
      link: "/getinvolved"
    },
    {
      id: 5,
      title: "Our network",
      link: "/ournetwork"
    },
    {
      id: 6,
      title: "Insights",
      link: "/insights"
    }
  ],
  whats: [
    {
      id: 1,
      title: "Get online week",
      text: "Lorem ipsum",
      link: "/getonline"
    },
    {
      id: 2,
      title: "Learn my way",
      text: "Lorem ipsum",
      link: "/learn"
    },
    {
      id: 3,
      title: "Make it click",
      text: "Lorem ipsum",
      link: "/makeit"
    },
    {
      id: 4,
      title: "Digital you",
      text: "Lorem ipsum",
      link: "/digitalyou"
    }
  ]
}

const getters = {
  getMenuItems: state => state.menuitems,
  getWhats: state => state.whats,
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}