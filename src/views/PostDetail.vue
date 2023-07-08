<template>
<Navbar/>
  <div>
    <h1>{{this.title}}</h1>
    <p>{{this.content}}</p>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import {usePosts} from '../stores/posts'
export default {
  components:{Navbar},
    data(){
        return{
            id: this.$route.params.id,
            title: '',
            content:''
        }
    },
    mounted(){
       let posts = usePosts().posts
       let {title, content,id, date_pub} = posts.filter(post => post.id === parseInt(this.id))[0]
       this.title = title
       this.content = content
       
    }
}
</script>

<style>

</style>