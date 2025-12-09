<template>
  <Carousel v-bind="carouselConfig" :spacing="20" :snapAlign="'start'">
    <Slide v-for="(image, index) in images" :key="index">
      <div class=" ">
        <img :src="image" alt="Carousel Image" class="w-full h-full object-cover" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

const images = [
  'https://zandokh.com/image/catalog/banner/2025/ZANDO/December/ZANDO_WS45_Main (2160x1066).jpg',
  'https://zandokh.com/image/catalog/banner/2025/ZANDO/November/ZANDO_70OFF_Main (2160x1066).jpg',
  'https://zandokh.com/image/catalog/banner/2025/ZANDO/December/ZANDO_WS45_Main (2160x1066).jpg',
  'https://zandokh.com/image/catalog/banner/2025/ZANDO/November/ZANDO_70OFF_Main (2160x1066).jpg',
];

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 3000,
};
</script>
