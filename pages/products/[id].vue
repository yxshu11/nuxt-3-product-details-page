<template>
  <div class="product-details-page">
    <h1>Product details Page</h1>
    <p>Product details Page</p>
    {{ $route.params.id }}
  </div>
</template>

<style scoped>
.product-details-page {
  padding: 20px;
  height: 300px;
  background-color: skyblue;
}
</style>