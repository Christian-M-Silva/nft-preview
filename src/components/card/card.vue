<template>
  <div class="bg-[hsl(213,61%,15%)] shadow-card rounded-lg p-4 w-64">
    <div class="relative h-56">
      <div class="flex justify-center h-full">
        <div
          class="
            bg-emerald-500
            w-full
            rounded-md
            area-view
            z-50
            opacity-40
            cursor-pointer
          "
          @click="showNft"
          v-show="isShowNFT"
        ></div>
        <img
          @click="showNft"
          class="rounded-md w-full absolute cursor-pointer"
          src="../../assets/image-equilibrium.jpg"
          alt="equilibrium"
        />
      </div>
    </div>

    <h2
      class="font-semibold my-2 cursor-pointer"
      @click="showNft"
      :class="isShowNFT ? 'text-emerald-500' : 'text-slate-50'"
    >
      Equilibrium #3429
    </h2>

    <p class="text-[hsl(215,51%,70%)] text-xs mb-2">
      Our Equilibrium collection promotes balance and calm
    </p>

    <div class="flex justify-between">
      <span class="flex items-center">
        <img src="../../assets/prisma.svg" alt="prisma" class="mr-1" />
        <span class="text-[hsl(178,100%,50%)] text-xs font-semibold"
          >0.041ETH</span
        >
      </span>

      <span class="flex items-center">
        <img src="../../assets/clock.svg" alt="clock" class="mr-1" />
        <span class="text-[hsl(215,51%,70%)] text-xs font-semibold"
          >3 days left</span
        >
      </span>
    </div>

    <hr class="my-3" />

    <div class="flex gap-2 items-center">
      <img
        src="../../assets/image-avatar.png"
        alt="avatar"
        class="h-7 border-2 border-slate-50 rounded-full"
      />
      <span
        class="text-xs cursor-pointer"
        @click="showNft"
        :class="isShowNFT ? 'text-emerald-500' : 'text-slate-50'"
        ><span class="text-[hsl(215,51%,70%)]">Creation of</span> Jules
        Wyvern</span
      >
    </div>
  </div>
</template>
<script src="./card.js"></script>
<style src="./card.css"></style>