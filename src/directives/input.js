export default {
  install (Vue) {
    Vue.directive('focus', (el, binding) => {
      if (binding.value) {
        el.focus()
      }
    })
  }
}