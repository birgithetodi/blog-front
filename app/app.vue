
<script setup lang="ts">
const route = useRoute()

const menuItems = [
  { title: 'Home', path: '/' },
  { title: 'Cats', path: '/cats' },
  { title: 'Kittens', path: '/kittens' },
  { title: 'SORRI', path: '/kittens/sorri' },
  { title: 'Any cat name', path: '/kittens/anycatnamehere' }
]
</script>

<template>
  <div>
    <el-menu
      mode="horizontal"
      :default-active="route.path"
      class="blog-menu"
    >
      <el-menu-item
        v-for="item in menuItems"
        :key="item.path"
        :index="item.path"
      >
        <NuxtLink :to="item.path" class="menu-link">
          {{ item.title }}
        </NuxtLink>
      </el-menu-item>
    </el-menu>

    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<style>

.blog-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
}

.blog-menu .el-menu-item {
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin: 0;
}

.menu-link {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
}

</style>
