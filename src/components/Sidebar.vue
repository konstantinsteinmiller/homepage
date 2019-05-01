<template>
  <aside class="sidebar bg-grey-darkest w-64 flex-no-shrink">
    <nav class="flex flex-col justify-between h-full">
      <ul class="pt-2g">
        <nav-item title="About me">
          <template slot="icon">
            <use href="@/assets/svg/sprite.svg#icon-user"></use>
          </template>
        </nav-item>
        <nav-item title="CV" class="nav-item--active">
          <template slot="icon">
            <use href="@/assets/svg/sprite.svg#icon-news"></use>
          </template>
        </nav-item>
        <nav-item title="Portfolio">
          <template slot="icon">
            <use href="@/assets/svg/sprite.svg#icon-briefcase"></use>
          </template>
        </nav-item>
        <nav-item title="Github">
          <template slot="icon">
            <use href="@/assets/svg/sprite.svg#icon-github"></use>
          </template>
        </nav-item>
        <nav-item title="Xing">
          <template slot="icon">
            <use href="@/assets/svg/sprite.svg#icon-xing"></use>
          </template>
        </nav-item>
      </ul>

      <div class="text-center text-l text-grey-lighter p-1g">
        &copy; 2019 by Konstantin Steinmiller
      </div>
    </nav>
  </aside>
</template>

<script>
import NavItem from '@/components/molecules/NavItem'
import Icon from '@/components/atoms/Icon'

export default {
  components: { NavItem, Icon },

  data() {
    return {}
  }
}
</script>

<style lang="sass">
</style>
