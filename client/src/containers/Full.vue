<template>
  <div id="container" class="app effect mainnav-lg">
        <AppHeader/>
        <div class="boxed">

            <!--CONTENT CONTAINER-->
            <!--===================================================-->
            <div id="content-container">
                <PageTitle/>
                <breadcrumb :list="list"/>
                <div id="page-content">
                <router-view></router-view>
                </div>
            </div>
            <MainNavigation/>
            <AppAside/>
        </div>
        <Footer/>
        <ScrollPage/>
  </div>
</template>

<script>
import nav from '../_nav'
import { Header as AppHeader, Sidebar, Aside as AppAside, 
Footer as AppFooter, Breadcrumb, MainNavigation, PageTitle, ScrollPage } from '../components/'

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    AppFooter,
    Sidebar,
    MainNavigation, 
    Breadcrumb,
    PageTitle, 
    ScrollPage
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  },
  created() {
    let themejs = document.createElement('script');    
    themejs.setAttribute('src',"/static/js/nifty.min.js");
    document.head.appendChild(themejs);
  }
}
</script>


