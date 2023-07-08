<template>
  <Navbar />
  <main>
    <div class="form-input">
      <form @submit.prevent="addToPost">
        <div>
          <label for="title">Title</label>
          <input type="text" v-model="title" placeholder="Title.." required />
        </div>
        <div>
          <label for="content">Content</label>

          <textarea
            v-model="content"
            placeholder="Content.."
            required
          ></textarea>
        </div>
        <div>
          <button>Save Post</button>
        </div>
      </form>
    </div>
    <div class="parent" v-for="post in posts.posts" :key="post.id">
      <div  class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <span>{{ post.date }}</span>
      </div>
      <div class="btn">
        <router-link :to="{name: 'PostDetail', params : {id: post.id}}"><button class="detail">Details</button></router-link>
        <button class="delete" @click="deletePost(post.id)">Delete</button>
         <router-link :to="{name: 'PostUpdate', params : {id: post.id}}"><button class="update">Update</button></router-link>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import { usePosts } from "../stores/posts";
export default {
  components: { Navbar },
  data() {
    return {
      posts: usePosts(),
      title: "",
      content: "",
    };
  },

  methods: {
    addToPost() {
      const posts = usePosts();
      posts.addPost({
        id: Math.floor(Math.random() * 100000),
        title: this.title,
        content: this.content,
        date: new Date().toLocaleString().split(",")[0],
      });

      this.title = ''
      this.content = ''
    },
    deletePost(id){
        const posts = usePosts();
        posts.deletePost(id)
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

/*Post List*/
.parent{
    display: flex;
    justify-content: space-between;
     border: 1px solid #c3c3c3;
  box-shadow: 5px 3px 3px -3px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  text-align: start;
  font-family: "Ysabeau Infant", sans-serif;
  padding: 5px 10px;
  margin: 20px;
}
.post {
  text-align: start;
  font-family: "Ysabeau Infant", sans-serif;
  width: 100%;
}

.post h3 {
  font-size: 1.5em;
}

.post p {
  font-weight: 700;
}

.btn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

}

.btn button{
    margin: 5px;
}

.delete{
    background: #ef233c;
}

.update{
    background: #40916c;
}
</style>