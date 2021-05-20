<template>
  <nav>
    <p>I am a sidebar</p>
    <ul>
      <li>
        <router-link to="/app1">App1</router-link>
      </li>
      <li>
        <router-link to="/app2">App2</router-link>
      </li>
      <li>
        <router-link to="/app3">App3</router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  background-color: pink;
}
a {
  text-decoration: none;
  color: black;
}
a.router-link-active {
  color: white;
  background-color: red;
}
</style>