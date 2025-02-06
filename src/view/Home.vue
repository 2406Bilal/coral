<script setup>
import { Filter } from 'lucide-vue-next';
import Header from '~/components/Header.vue'
import BrandOne from '~/assets/brand-1.png';
import BrandTwo from '~/assets/brand-2.png';
import BrandThree from '~/assets/brand-3.png';
import BrandFour from '~/assets/brand-4.png';
import Brandfive from '~/assets/brand-5.png';
import Card from '~/assets/card.png';
import Logo from '~/assets/logo.svg'
import Card1 from '~/assets/card(1).png';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Product from '../components/Product.vue';
import Footer from '../components/Footer.vue';
import BestSales from '../components/BestSales.vue';
import Banner from '../components/Banner.vue';
const products = ref([])
const bestsales = ref([])
const photos = ref([])

onMounted(() => {
  getProducts();
});

const getProducts = async () => {
  try {
    let response = await axios.get('https://fakestoreapi.com/products');
    products.value = response.data.slice(0, 8);
    bestsales.value = response.data.slice(0, 4);
    photos.value = response.data.slice(0, 6);
    console.log('response', response.data);  
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
};
</script>

<template> 
  <Header id="top" />
<div class="container mx-auto">
  <div>
    <div class="flex items-center justify-between mt-24">
      <img :src="BrandOne" alt="">
      <img :src="BrandTwo" alt="">
      <img :src="BrandThree" alt="">
      <img :src="BrandFour" alt="">
      <img :src="Brandfive" alt="">
    </div>
  </div>

  <div class="mt-24">
    <div class="grid grid-cols-2 gap-6">
      <div>
        <img :src="Card" alt="image" class=""> 
      </div>
      <div class="grid grid-cols-2 gap-6">
        <img :src="Card1" alt="image"> 
        <img :src="Card1" alt="image"> 
        <img :src="Card1" alt="image"> 
        <img :src="Card1" alt="image"> 
      </div>
    </div>
  </div>

  <div class="mt-36">
    <p class="text-center text-5xl font-medium">Or subscribe to the newsletter</p>
    <div class="flex justify-between items-center mt-9">
      <div class="flex gap-10 text-base font-semibold text-[#00000080]">
        <p class="text-black">All products</p>
        <p>T-shirt</p>
        <p>Hoodies</p>
        <p>Jacket</p>
      </div>
      <div class="bg-[#1E2832] text-white py-2 px-4 flex cursor-pointer w-fit text-base">
        <Filter />
        filter
      </div>
    </div>
      <div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-9">
          <div v-for="product in products" :key="product.id" @add-to-cart="addToCart">
            <Product :product="product" />
          </div>
         </div>
      </div>
  </div>
</div>
<Banner class="mt-36"/>
<div class="container mx-auto mt-36">
  <p class="text-5xl font-medium text-center">Best sellers</p>
  <div class="flex justify-between items-center mt-9">
      <div class="flex gap-10 text-base font-semibold text-[#00000080]">
        <p class="text-black">All products</p>
        <p>T-shirt</p>
        <p>Hoodies</p>
        <p>Jacket</p>
      </div>
      <div class="bg-[#1E2832] text-white py-2 px-4 flex cursor-pointer w-fit text-base">
        <Filter />
        filter
      </div>
    </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-9">
    <div v-for="bestsale in bestsales" :key="bestsale.id">
      <BestSales :product="bestsale" />
    </div>
  </div>
</div>

<div class="bg-[#1E28320D] mt-24">
  <div class="container mx-auto">
    <p class="text-center font-medium text-5xl p-24">Follow products and discounts on Instagram</p>
    <div class="grid grid-cols-1 md:grid-cols-6 gap-6">
      <div v-for="photo in photos" :key="photo.id">
        <img :src="photo.image" alt="Instagram photo" class="size-52" />
      </div>
    </div>

    <div class="mt-16 flex flex-col items-center pb-24">
      <p class="text-5xl font-medium">Or subscribe to the newsletter</p>
      <div class="flex gap-3 mt-20">
        <input type="email" class="border-b-2 pb-3 border-black w-[620px] bg-inherit placeholder:font-semibold focus:outline-none placeholder:text-base text-lg" placeholder="Email Address...">
        <button class="border-black border-b-2 px-5">submit</button>
      </div>
    </div>
  </div>
</div>
<Footer/>
</template>

