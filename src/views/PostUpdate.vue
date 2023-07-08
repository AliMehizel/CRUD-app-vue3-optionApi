<template>
  <div class="form-input">
    <form @submit.prevent="EditPost">
      <div>
        <label for="title">Title</label>
        <input type="text" v-model="title" />
      </div>
      <div>
        <label for="content">Content</label>

        <textarea v-model="content"></textarea>
      </div>
      <div>
        <button>Save Post</button>
      </div>
    </form>
  </div>
</template>

<script>
import { usePosts } from "../stores/posts";
export default {
  data() {
    return {
      id: this.$route.params.id,
      data: usePosts(),
      title: "",
      content: "",
    };
  },

  mounted() {
    this.updateState();
    
  },
  methods: {
    updateState() {
      let posts = usePosts().posts;
      let { title, content, id, date_pub } = posts.filter(
        (post) => post.id === parseInt(this.id)
      )[0];
      this.title = title;
      this.content = content;
    },
    EditPost(){
        const post = usePosts()
        post.UpdatePost({
            id: parseInt(this.id),
            title: this.title,
            content: this.content
        })
    }
  },
};
</script>

<style scoped>
.form-input form {
  padding: 10px;
  font-family: "Ysabeau Infant", sans-serif;
  font-weight: bold;
}

.form-input {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
form div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px;
}
input {
  padding: 10px;
}
textarea {
  height: 100px;
  padding: 10px;
}
input,
textarea {
  width: 450px;
}

button {
  padding: 10px;
  font-family: "Ysabeau Infant", sans-serif;
  font-weight: bolder;
  background: #10475e;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
}

</style>