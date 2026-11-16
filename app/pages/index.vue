<script setup>
const vajutatud = () => {
  alert('Nupp töötab!')
}
</script>

<template>
  <div>
    <p>Hello NUXT!!!!</p>

    <Btn />

    <UButton @click="vajutatud">
      Vajuta siia
    </UButton>
  </div>
</template>