<template>
  <li class="nav-item list-reset relative">
    <a class="nav-item__link flex items-center" href="#">
      <icon class="text-white !w-6 !h-6 mr-4">
        <slot name="icon" />
      </icon>
      <span class="text-white ml-3">{{ title }}</span>
    </a>
    <div class="nav-item__animation absolute"></div>
  </li>
</template>

<script>
import Icon from '@/components/atoms/Icon'
export default {
  components: { Icon },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">
.nav-item
  &__animation
    top: 0
    left: 0
    width: 3px
    @apply absolute h-full bg-primary
    transition: transform .2s, width .4s cubic-bezier(1,0,0,1) .2s, background-color .1s
    transform: scaleY(0)
  &:hover &__animation,
  &--active &__animation
    display: block
    transform: scaleY(1)
    width: 100%
  &:active &__animation
    @apply bg-primary-light
  &__link
    > .icon
      vertical-align: bottom
    &:visited, &:link
      z-index: 10
      position: relative
      text-decoration: none
      @apply px-2g py-6 block uppercase text-grey-light
</style>
