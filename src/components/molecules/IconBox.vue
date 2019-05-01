<template>
  <div
    class="icon-box flex items-center relative px-1g mx-3 hover:bg-grey-light h-full"
  >
    <icon class="text-grey-darker">
      <slot name="icon" />
    </icon>
    <user-notification class="user-notification absolute">
      <slot name="notification" />
    </user-notification>
  </div>
</template>

<script>
import UserNotification from '@/components/atoms/UserNotification'
import Icon from '@/components/atoms/Icon'

export default {
  components: { UserNotification, Icon },
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    iconPath() {
      return '@/assets/svg/sprite.svg#icon-bookmark'
    }
  }
}
</script>

<style lang="sass">
.user-notification
  right: .5rem
  top: .25rem
</style>
