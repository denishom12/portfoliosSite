<template>
<div>
  <kinesis-container event="scroll">
    <kinesis-element
        :strength="25"
        transformOrigin="0.5"
        :maxX ="0.5"
        axis = "x"
        type="depth">
      <img src="../assets/site.png" alt="">
    </kinesis-element>
  </kinesis-container>
</div>
</template>

<script>
import { KinesisContainer, KinesisElement} from "vue-kinesis"

export default {
  name: "threePanel",
  components:{KinesisContainer, KinesisElement},
  mounted() {

  }
}
</script>

<style scoped>

</style>