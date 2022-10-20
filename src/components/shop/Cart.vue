<script setup>
</script>

<template>
    <div class="details w-full p-5  flex justify-between md:flex-col cursor-pointer" v-for="card in data.all"
        :key="card">
        <!-- The right part of the cut in Responsive -->
        <div class="right-card relative">
            <!-- Top selling photo -->
            <img :src="card.ImgSell" alt="" class="w-16 h-5 absolute top-7 md:-top-8" :class="card.none" />
            <!--Number card -->

            <div class="
              number-id
              bg-secondary500
              w-9
              h-7
              flex
              justify-center
              items-center
              rounded-lg
              absolute
              top-0
              md:rounded-r-none md:w-8
            ">
                <h2 class="text-white font-semibold">{{ card.NumberPro }}</h2>
            </div>
            <!-- img card -->
            <div class="img w-32 h-32 md:w-56 md:h-56 md:mx-auto">
                <img :src="card.ImgBest" alt="" class="w-32 md:w-full md:h-full" />
            </div>
        </div>

        <!-- The left part of the cut in Responsive -->
        <div class="left-card flex justify-end flex-col relative w-3/4 md:w-full">
            <div class="title-off h-full flex flex-col justify-around mr-4 md:mr-0 md:">
                <h3 class="
                  text-iconHighEmphasis
                  font-semibold
                  text-xs
                  mt-2
                  leading-5
                ">
                    {{ card.title }}
                </h3>
            </div>


        </div>
        <!-- star card  -->
        <div class="star flex justify-between ml-4  mb-4 mt-2  md:ml-4">
            <div class="status-product flex items-center  mr-4 md:mr-0">
                <i :class="card.icon" class="text-green700"></i>
                <p class="mr-1 text-[10px] font-semibold text-neutral600">{{card.status}}</p>
            </div>
            <div class="sec-star flex  ">
                <h2 class=" font-semibold text-xs mt-1">{{ card.star }}</h2>
                <img src="@/assets/images/BestSeller/star.png" alt="" class=" mr-2 mt-1" />
            </div>

        </div>
        <!-- price card  -->
        <div class="price flex justify-between items-center  ">
            <div class="off-price">
                <h2 class="
                      text-xs text-white
                      bg-buttonBrand
                      w-9
                      p-1
                      text-center
                      rounded-2xl
                      font-semibold            
                    
                    -mt-3
                    " :class="card.noneOff">
                    {{ card.off }}
                </h2>
            </div>
            <div class="item-price flex">
                <h2 class="ml-1 font-semibold text-sm mt-1">{{ card.price }}</h2>
                <img src="@/assets/images/BestSeller/toman.png" alt="" class="w-5 h-5" />
            </div>
        </div>
        <!-- old price card  -->
        <div class="oldprice flex justify-end md:flex md:justify-end md:ml-6">


            <h2 class="
                line-through
                font-semibold
                text-xs text-neutral300
                relative
                top-2
                ml-6
                md:ml-0
              ">
                {{ card.OldPrice }}
            </h2>
        </div>
    </div>
</template>