<script setup>
import {ref} from 'vue'
import { Search,User,ShoppingBasket } from 'lucide-vue-next';
import Logo from '~/assets/logo.svg'
import imageProduct from '~/assets/image-product.png';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToCart = () => {
  router.push('/cart');
};

const categories = ref([
  'Jewelry & Accessories', 'Clothing & Shoes' , 'Home & Living', 'Wedding & Party', 'Toys & Entertainment', 'Art & Collectibles', 'Craft Supplies & Tools'
])
</script>
<template>
    <div class="bg-[#1E28320D]"> 
  <div class="container mx-auto p-5">
    <div class="flex items-center justify-between border-b pb-5">
      <Search class="size-6" />
      <img :src="Logo" alt="logo">
      <div class="flex items-center gap-2 md:gap-5">
        <div class="flex items-center p-2 gap-2">
          <User />
          <p class="text-lg hidden md:flex">Account</p>
        </div>
        <button class="p-2 gap-2 flex items-center" @click="goToCart()">
          <ShoppingBasket />
          <p class="text-lg hidden md:flex">Shoping</p>
        </button>
      </div>
    </div>

    <div class="mt-8">
      <ul class="flex overflow-auto items-center w-full gap-5 md:justify-between text-base">
         <li v-for="(item, index) in categories" :key="index" class="text-nowrap">
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="mt-5 md:mt-20 md:flex gap-24">
        <div class="content-evenly space-y-3 md:space-y-10">
          <p class="text-3xl md:text-7xl font-light">Collections</p>
          <p class="text-xl md:text-3xl line-height-normal">you can explore ans shop many differnt collection
            from various barands here.</p>
            <button class="flex items-center p-2 md:p-5 gap-3 text-xl md:text-2xl w-fit bg-[#1E2832] text-white">
              <ShoppingBasket class="size-5 md:size-8" /> 
                shop now
            </button>
        </div>

        <div class="hidden md:flex">
          <img :src="imageProduct" alt="image">
        </div>
    </div>
  </div>
</div>
</template>