<template>
  <div id="app" class="app flex text-grey-dark gra-br-red">
    <!--<div id="nav" class="bg-black">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <div class="container flex-grow max-w-75g my-8g mx-auto bg-grey-light">
      <the-header></the-header>
      <div class="content flex h-full pb-4g">
        <the-sidebar></the-sidebar>
        <main class="main flex-grow"><router-view /></main>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/Header'
import TheSidebar from './components/Sidebar'

export default {
  components: { TheHeader, TheSidebar }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600')

:root
  --shadow-dark: 0 2rem 6rem rgba(0,0,0,.3)

.app
  height: 100vh

.container
  box-shadow: var(--shadow-dark)

*
  margin: 0
  padding: 0

*,
*::after,
*::before
  box-sizing: inherit

html
  box-sizing: border-box
  /*font-size: 62.5%;*/

body
  font-family: "Open Sans", Helvetica, Arial, sans-serif
  font-weight: 400
  line-height: 1.4
  min-height: 100vh
</style>
