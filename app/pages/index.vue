
<script setup lang="ts">
import type { BlogPostProps } from '@nuxt/ui';

const posts = ref<BlogPostProps[]>([]);
let page = ref(0);
let total = ref(0);
let perPage = ref(0);
let post: any;
let route = useRoute();
await getPosts(Number(route.query.page) || 1);

async function getPosts(p: Number){
  let data: any = await $fetch('http://localhost:8000/api/posts', {
    query: {
      page: p,
    },
    headers: {
      accept: 'application/json',
    }
  });
  page.value = data.current_page;
  total.value = data.total;
  perPage.value = data.per_page;
  posts.value = [];

  for(post of data.data) {
  posts.value.push({
    title: post.title,
      description: post.snippet,
      image: post.images[0]?.path,
      date: post.created_at,
  })
  }
}
function to(page: number) {
  return {
    query: {
      page
    }
  }
}

</script>

<template>
  <div>
    <UBlogPosts class="lg:grid-cols-4">
      <UBlogPost
        v-for="(post, index) in posts"
        :key="index"
        v-bind="post"
      />
    </UBlogPosts>
  </div>
</template>
