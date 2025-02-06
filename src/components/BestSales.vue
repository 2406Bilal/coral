<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <img :src="product.image" alt="Product Image" class="w-[312px] h-[400px] object-cover"/>
    <div class="px-3 pt-4">
        <p class="text-base font-semibold line-clamp-1">{{ product.title }}</p>
        <div class="flex justify-between mt-3">
          <p>{{ product.category }}</p>
          <p>${{ product.price }}</p>
         </div>
      </div>
  </div>
</template>

