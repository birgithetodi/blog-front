<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const menuItems = [
 { label: 'Home', path: '/' },
 { label: 'Cats', path: '/cats' },
 { label: 'Kittens', path: '/kittens' },
 { label: 'Sorri', path: '/kittens/sorri' },
 { label: 'Any cat name', path: '/kittens/anycatnamehere' }
]
function navigate(path: string) {
 router.push(path)
}
</script>
<template>
<NaiveConfig>
<div class="app-container">
<header class="menu-header">
<div class="menu">
<NButton
           v-for="item in menuItems"
           :key="item.path"
           :type="route.path === item.path ? 'primary' : 'default'"
           @click="navigate(item.path)"
>
           {{ item.label }}
</NButton>
</div>
</header>
<main class="page-content">
<NuxtRouteAnnouncer />
<NuxtPage />
</main>
</div>
</NaiveConfig>
</template>
<style>
.app-container {
 min-height: 100vh;
}
.menu-header {
 width: 100%;
 padding: 15px 25px;
 background: #c281ff;
 border-bottom: 1px solid #8f53c7;
 box-sizing: border-box;
}
.menu {
 display: flex;
 flex-direction: row;
 align-items: center;
 flex-wrap: wrap;
 gap: 12px;
}
.page-content {
 padding: 20px;
}
</style>