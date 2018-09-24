<template>
  <transition name="modal">
    <div class="overlay" @click="$emit('close')">
      <div class="panel" @click.stop>
        <ModalContent v-if="data != null" :data="data"></ModalContent>
      </div>
    </div>
  </transition>
</template>

<script>
import ModalContent from './ModalContent.vue'

export default {
  components: {
    ModalContent
  },
  props: ['data']
}
</script>

<style lang="scss">
.overlay {
  background: rgba(0, 0, 0, .8);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  transition: all .5s ease;
}

.panel {
  width: 90%;
  max-height: 90%;
  max-width: 1100px;
  margin: 30px auto;
  background: #fff;
  padding: 20px;
  transition: all .3s ease;
  overflow-y: auto;
}
.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .panel,
.modal-leave-active .panel{
  top: -200px;
}
</style>
