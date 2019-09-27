<template>
  <div>
    <h1>Post id: {{ post.id }} </h1>
    <div v-html="post.content.rendered"></div>
  </div>
</template>

<script>
export default {
  name: 'PostPage',
  async asyncData({ params, error, payload}) {
    if (payload) {
      return { post: payload }
    } else {
      const res = await fetch('../../data.json')
      const data = await res.json()
      return {
        post: data.find(post => post.id === parseInt(params.id))
      }
    }
  }
}
</script>

