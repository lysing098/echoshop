<script setup>
import { GrSearch } from "vue-icons-plus/gr";
import { SlUser } from "vue-icons-plus/sl";
import { EpShoppingCartFull } from "vue-icons-plus/ep";
</script>
<template>
  <div class="bg-white shadow-2xl fixed z-10  right-0 left-0">
    <div class="container mx-auto flex items-center justify-between py-5">
      <!-- logo -->
      <img
        src="https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/logo.png"
        alt="logo"
      />
      <!-- nav -->
      <div class=" flex items-center gap-5 uppercase">
        <p>home</p>
        <p>shop</p>
        <p>about</p>
        <p>contact us</p>
      </div>
      <!-- icon -->
      <div class="flex items-center gap-5">
        <SlUser class="hover:cursor-pointer" />
        <EpShoppingCartFull class="hover:cursor-pointer" />
        <GrSearch class="hover:cursor-pointer" />
      </div>
    </div>
  </div>
</template>
