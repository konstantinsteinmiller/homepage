<template>
  <header
    class="header flex justify-between items-center h-7g bg-white border-0 border-grey-light border-solid border-b"
  >
    <img
      class="logo w-3g h-3g mx-2g my-3"
      src="../assets/logo.png"
      alt="homepage logo"
    />
    <search class=""></search>
    <nav class="flex items-center self-stretch">
      <icon-box icon="bookmark">
        <template slot="icon">
          <use href="@/assets/svg/sprite.svg#icon-bookmark"></use>
        </template>
        <template slot="notification">
          7
        </template>
      </icon-box>
      <icon-box icon="chat">
        <template slot="icon">
          <use href="@/assets/svg/sprite.svg#icon-chat"></use>
        </template>
        <template slot="notification">
          13
        </template>
      </icon-box>
      <div class="flex items-center">
        <img
          class="w-3g h-3g"
          src="@/assets/img/user.png"
          alt="Konstantin Foto"
        />
        <div class="mx-3">Konstantin</div>
      </div>
    </nav>
  </header>
</template>

<script>
import Search from '@/components/atoms/Search'
import IconBox from '@/components/molecules/IconBox'

export default {
  components: { Search, IconBox }
}
</script>
