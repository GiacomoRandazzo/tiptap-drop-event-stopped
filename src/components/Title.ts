import { Node } from "@tiptap/core";
import { mergeAttributes, VueNodeViewRenderer } from "@tiptap/vue-3";
import Title from "./Title.vue";

export default Node.create({
  name: "title",

  content: "paragraph",

  group: "block",

  draggable: false,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="title"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "title" }),
      0,
    ];
  },

  addNodeView() {
    return VueNodeViewRenderer(Title);
  },
});
