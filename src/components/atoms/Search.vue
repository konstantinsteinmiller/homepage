<template>
  <form action="" class="form">
    <div class="flex justify-center items-center">
      <input
        type="text"
        placeholder="Search the page"
        class="search__input trans w-90p py-3 px-6 pr-3g bg-grey-lighter rounded-full
               focus:outline-none focus:w-full focus:bg-grey-light"
      />
      <button
        class="search__button -ml-2g focus:outline-none cursor-pointer flex items-center text-grey-dark"
      >
        <svg class="w-6 h-6 fill-current">
          <use xlink:href="@/assets/svg/sprite.svg#icon-magnifying-glass"></use>
        </svg>
      </button>
    </div>
  </form>
</template>

<style lang="sass">
.search
  &__input
    &::-webkit-input-placeholder
      @apply text-grey-dark
  &__button
    &:focus
      transform: translateY(2px)
.form
  flex: 0 0 40%
</style>
