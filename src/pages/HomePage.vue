<template>
  <div>
    <Carousel />
    <div class="text-center my-10">
      <!-- new arrival -->
      <h1 class="uppercase text-2xl font-bold mb-10 tracking-widest">
        New Arrival
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus
        maximus vehicula.<br />
        Sed feugiat, tellus vel tristique posuere, diam
      </p>
      <div class="grid grid-cols-4 my-5">
        <div
          v-for="item in data.filter((p) => p.type === 'new-arrival')"
          :key="item.name"
          class="relative overflow-hidden border border-gray-200 group"
        >
          <!-- Image -->
          <img
            :src="item.image"
            :alt="item.name"
            class="group-hover:scale-110 duration-300"
          />

          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
          >
            <button
              @click="openModal(item.image)"
              class="bg-black/50 p-5 rounded-full shadow hover:scale-110 transition duration-300 hover:bg-white flex items-center justify-center group"
            >
              <GrSearch class="text-white group-hover:text-black" />
            </button>
          </div>

          <!-- Price: start off above, move down on hover -->
          <p
            class="absolute top-[-40px] right-5 font-bold text-lg text-black transition-all duration-500 group-hover:top-2"
          >
            ${{ item.price }}
          </p>

          <!-- Text horizontally centered -->
          <div class="absolute bottom-5 w-full text-center px-2">
            <p
              class="font-bold uppercase text-2xl tracking-widest hover:cursor-pointer inline-block relative group"
            >
              {{ item.name }}
              <span
                class="absolute left-0 top-0 w-0 h-1 bg-[#fde428] transition-all duration-700 group-hover:w-full"
              ></span>
            </p>
            <p class="text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- popular product -->
      <div>
        <h1 class="uppercase text-2xl font-bold mt-20 mb-5 tracking-widest">
          popular product
        </h1>
        <p class="mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula.<br />
          Sed feugiat, tellus vel tristique posuere, diam
        </p>

        <div class="max-w-6xl mx-auto mt-10">
          <VueCarousel
            v-bind="carouselConfig"
            :spacing="20"
            :snapAlign="'start'"
          >
            <Slide v-for="(item, index) in data" :key="index">
              <div class="p-3 group cursor-pointer">
                <!-- Image -->
                <div class="relative overflow-hidden">
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-full h-[250px] object-cover transition duration-300 group-hover:scale-110"
                  />

                  <!-- Hover Icons -->
                  <div
                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    <div class="bg-black/60 px-4 py-2 rounded-full flex gap-3">
                      <EpShoppingCartFull
                        class="text-white hover:text-yellow-300 text-xl"
                      />
                      <GrSearch
                        class="text-white hover:text-yellow-300 text-xl"
                      />
                      <AiOutlineHeart
                        class="text-white hover:text-red-400 text-xl"
                      />
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-2">
                <!-- Text -->
                <p
                  class="text-lg uppercase tracking-widest font-bold mt-2 hover:text-yellow-300 transition"
                >
                  {{ item.name }}
                </p>
                <p class="text-gray-500 text-sm ">{{ item.description }}</p>
                <p class="text-black font-semibold text-lg">
                  $ {{ item.price }}
                </p>
                </div>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
              <!-- <Pagination /> -->
            </template>
          </VueCarousel>
        </div>
      </div>
    </div>
    <!-- Modal for Image -->
    <div
      v-if="modalImage"
      class="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50"
      @click="modalImage = null"
    >
      <div class="relative inline-block">
        <!-- Close button -->
        <button
          @click="modalImage = null"
          class="absolute -top-7 -right-7 p-2 rounded-full bg-black/50 text-white shadow-lg hover:cursor-pointer z-50"
        >
          <CgClose size="24" />
        </button>

        <!-- Image -->
        <img
          :src="modalImage"
          class="max-h-[90vh] max-w-[90vw] shadow-2xl rounded-lg transform transition duration-300 scale-105"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import Carousel from "../components/Carousel.vue";
import data from "../data/data.json";
import { GrSearch } from "vue-icons-plus/gr";
import { CgClose } from "vue-icons-plus/cg";
import "vue3-carousel/dist/carousel.css";
import { EpShoppingCartFull } from "vue-icons-plus/ep";
import { AiOutlineHeart } from "vue-icons-plus/ai";
import {
  Carousel as VueCarousel,
  Slide,
  Navigation,
  Pagination,
} from "vue3-carousel";

const images = [
  "https://zandokh.com/image/catalog/banner/2025/ZANDO/December/ZANDO_WS45_Main (2160x1066).jpg",
  "https://zandokh.com/image/catalog/banner/2025/ZANDO/November/ZANDO_70OFF_Main (2160x1066).jpg",
  "https://zandokh.com/image/catalog/banner/2025/ZANDO/December/ZANDO_WS45_Main (2160x1066).jpg",
  "https://zandokh.com/image/catalog/banner/2025/ZANDO/November/ZANDO_70OFF_Main (2160x1066).jpg",
];

const carouselConfig = {
  itemsToShow: 4,
  wrapAround: true,
  autoplay: false,
};

const modalImage = ref(null);
const openModal = (img) => {
  modalImage.value = img;
};

watch(modalImage, (val) => {
  if (val) {
    document.body.classList.add("overflow-hidden"); // disable scroll
  } else {
    document.body.classList.remove("overflow-hidden"); // enable scroll
  }
});
</script>
