<template>
  <node-view-wrapper>
    <node-view-content class="content" />
    <div class="spacer" contenteditable="false"></div>
  </node-view-wrapper>
</template>

<script lang="ts">
import { NodeViewWrapper, NodeViewContent, nodeViewProps } from '@tiptap/vue-3'

export default {
  props: nodeViewProps,

  components: {
    NodeViewWrapper,
    NodeViewContent,
  },
}
</script>

<style lang="scss">
.spacer {
  height: 60px;
  background-color: green;
}
</style>