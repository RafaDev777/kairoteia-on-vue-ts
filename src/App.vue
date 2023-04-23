<script setup lang="ts">
</script>

<template>
<div>This is Landing APP Component
  <ul>
    <RouterLink to="/">
      <li>Home</li>
    </RouterLink>
    <RouterLink to="/demo">
      <li>Demo</li>
    </RouterLink>
    <RouterLink to="/">
      <li>Login</li>
    </RouterLink>
  </ul>
</div>
<RouterView/>
</template>

<style scoped>

</style>
