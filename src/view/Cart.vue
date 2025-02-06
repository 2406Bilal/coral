<script setup>
import { ref, onMounted } from 'vue';
import { ArrowLeft } from 'lucide-vue-next';
import Logo from '~/assets/logo.svg'
import { useRouter } from 'vue-router';

const router = useRouter();
const cart = ref([]);

const loadCart = () => {
  cart.value = JSON.parse(localStorage.getItem('cart')) || [];
};

const removeFromCart = (id) => {
  cart.value = cart.value.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

const clearCart = () => {
  cart.value = [];
  localStorage.removeItem('cart');
};

onMounted(loadCart);
</script>

<template>
  <div class="container mx-auto">
    <div class="mt-5 flex items-center justify-between">
      <div class="flex items-center">
        <ArrowLeft class="cursor-pointer"  @click="router.push('/')" />
        <h2 class="text-3xl">Your Cart</h2>
      </div>
      <img :src="Logo" alt="">
      <div>
        <button @click="clearCart" class="bg-gray-700 text-white px-6 py-2 mt-4 rounded">
          Clear Cart
        </button>
      </div>
    </div>

    <div v-if="cart.length > 0" class="grid grid-cols-3 gap-10 mt-5">
      <div v-for="item in cart" :key="item.id">
        <div class="p-4 border rounded-lg shadow">
          <img :src="item.image" alt="item Image" class="w-[312px] h-[400px] object-fill" />
          <p class="font-semibold line-clamp-1">{{ item.title }}</p>
        <div class="flex justify-between">
          <p>${{ item.price }}</p>  
          <button @click="removeFromCart(item.id)" class="bg-red-500 text-white px-3 py-1 rounded">
            x
          </button>
        </div>
        </div>
      </div>
    
    </div>

    <p v-else class="text-gray-500">Your cart is empty.</p>

  </div>
</template>
