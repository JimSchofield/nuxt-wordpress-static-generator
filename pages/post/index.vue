<template>
  <div>
    <h1>Post index:</h1>
    <ul>
      <li v-for="post in posts">
        <nuxt-link :to="'/post/' + post.id">{{ post.id }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostIndex',
  async asyncData({ params, error, payload}) {
    if (payload) {
      return { posts: payload }
    }
  }
}
</script>

