<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">home</NuxtLink></li>
        <li><NuxtLink to="/cats">cats</NuxtLink></li>
        <li><NuxtLink to="/kittens">kittens</NuxtLink></li>
        <li><NuxtLink to="/kittens/sorri">Sorri</NuxtLink></li>
        <li><NuxtLink to="/kittens/anycatnamehere">any cat name</NuxtLink></li>
      </ul>
    </nav>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
