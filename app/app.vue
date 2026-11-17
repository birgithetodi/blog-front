
<template>
  <div>
    <nav>
      <Menubar :model="items" />
    </nav>

    <main class="p-4">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const items = [
  {
    label: 'Avaleht',
    url: '/'
  },
  {
    label: 'Cats',
    url: '/cats'
  },
  {
    label: 'Kittens',
    url: '/kittens'
  },
  {
    label: 'Sorri',
    url: '/kittens/sorri'
  },
  {
    label: 'Garfield',
    url: '/kittens/anycatnamehere'
  }
]
</script>

