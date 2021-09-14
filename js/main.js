new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue', content: '本文' },
      { id: 2, title: 'Blogging with Vue', content: '本文' },
      { id: 3, title: 'Why Vue is so fun', content: '本文' }
    ],
    postFontSize: 1
  }
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button>
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})
