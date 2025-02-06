<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: Object,
});

const addToCart = () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []; 
  let existingProduct = cart.find(item => item.id === props.product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...props.product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};
</script>

<template>
  <div class="p-4 border rounded-lg shadow">
    <img :src="product.image" alt="Product Image" class="w-[312px] h-[400px] object-fill" />
    <p class="font-semibold line-clamp-1">{{ product.title }}</p>
    <p>${{ product.price }}</p>
    <button @click="addToCart" class="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
      Add to Cart
    </button>
  </div>
</template>
