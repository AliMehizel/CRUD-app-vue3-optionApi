import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePosts = defineStore('posts',{
  state: ()=>({
    posts: [
      {id: 1,title: 'Black night', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', date: new Date().toLocaleString().split(',')[0] }
    ]
  }),
  getters:{
    
  },
  actions:{
    getPost(id){
       this.posts.filter(post=>post.id === id)
    },
    addPost(data){
      this.posts.push(data)
    },
    deletePost(id){
      this.posts = this.posts.filter(post => post.id != id)
      console.log(this.posts)
    },
    UpdatePost(data){
      const {id } = data
      const posts = this.posts.filter(post=>post.id != id)
      this.posts = [...posts,data]

    }
  }
})