
<script setup>
const { reactive, ref } = require("@vue/reactivity");
const showDescription = ref(false);

const SocialNetworks = reactive([
  {
    img: require("@/assets/images/footer/icons8-instagram-100.png"),
  },
  {
    img: require("@/assets/images/footer/icons8-twitter-100.png"),
  },
  {
    img: require("@/assets/images/footer/icons8-linkedin-100.png"),
  },
  {
    img: require("@/assets/images/footer/icons8-aparat-100.png"),
  },
]);
const imgPelatform = reactive([
  {
    imgApp: require("@/assets/images/footer/google-play.svg"),
  },
  {
    imgApp: require("@/assets/images/footer/coffe-bazzar.svg"),
  },
  {
    imgApp: require("@/assets/images/footer/sib-app.svg"),
  },
  {
    imgApp: require("@/assets/images/footer/myket.svg"),
  },
  {
    // more:"hidden lg:flex",
    // imgApp: require("../../assets/img/footer/More.svg"),
  },
]);
console.log("test");

const imgServices = reactive([
  {
    imgServ: require("@/assets/images/footer/express-delivery.svg"),
    title: "امکان تحویل اکسپرس",
  },
  {
    imgServ: require("@/assets/images/footer/cash-on-delivery.svg"),
    title: "امکان پرداخت در محل ",
  },
  {
    imgServ: require("@/assets/images/footer/days-return.svg"),
    title: "7روز هفته , 24 ساعته",
  },
  {
    imgServ: require("@/assets/images/footer/original-products.svg"),
    title: "7 روز ضمانت بازگشت کالا",
  },
  {
    imgServ: require("@/assets/images/footer/support.svg"),
    title: "ضمانت اصل بودن کالا",
  },
]);

const Description = reactive([
  {
    title: "فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین",
    Description:
      "یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.",
  },
  {
    title: "کدام محصولات در دیجی‌کالا قابل سفارش هستند؟",
    Description:
      "تقریبا می‌توان گفت محصولی وجود ندارد که دیجی‌کالا برای مشتریان خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای هفته و تمامی شبانه روز یا در روزهای خاصی مثل حراج شگفت انگیز دیجی‌کالا که محصولات دارای تخفیف عالی می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر مجموعه‌های پرطرفدار محصولات دیجی‌کالا شامل مواردی می‌شود که در ادامه به معرفی آن‌ها می‌پردازیم.",
  },
  {
    title: "کالای دیجیتال",
    Description:
      "انواع گوشی موبایل از برندهای مختلفی مثل آیفون،  گوشی سامسونگ، گوشی نوکیا، گوشی شیائومی، گوشی هواوی، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار مثل تبلت سامسونگ نوت 10، انواع هندزفری مثل هندزفری بی سیم، تلوزیون از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل مودم ایرانسل، آنتن و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای دیجیتال در دیجی‌کالا قرار دارند.",
  },
  {
    title: "خودرو، ابزار و تجهیزات صنعتی",
    Description:
      "انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه کلاج و... و لوازم مصرفی خودرو مثل کفپوش سانا در این گروه قرار می‌گیرند.",
  },
  {
    title: "مد و پوشاک",
    Description:
      "محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی، لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی و خارجی موجود در دیجی کالا مثل آدیداس، نایکی، دبنهامز، آلدو، درسا و... خریداری کنید.",
  },
  {
    title: "اسباب بازی کودک و نوزاد",
    Description:
      "در این دسته از کالاهای دیجی‌کالا، انواع لوازم بهداشتی و حمام کودک و نوزاد، انواع پوشاک و کفش، تبلت، اسباب‌بازی، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ... قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان تبدیل کند.",
  },
  {
    title: "کالاهای سوپر مارکتی",
    Description:
      "هر چیزی از مواد خوراکی که به آن نیاز دارید، در سوپرمارکت دیجی‌کالا پیدا می‌شود، محصولات پرطرفداری مثل کره بادام‌زمینی، عسل، سس، قهوه، زعفران، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل نستله، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.",
  },
  {
    title: "زیبایی و سلامت",
    Description:
      "انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و... همگی در دیجی‌کالا موجود هستند. همچنین محصولات بهداشتی مثل انواع شامپو، کرم، ماسک صورت، ضد تعریق، ماسک مو  و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و اسپری، انواع زیورآلات طلا و نقره مثل سرویس طلا، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و سلامت دیجی‌کالا قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس، پنبه ریز، سینره و... حضور دارند.",
  },
  {
    title: "خانه و آشپزخانه",
    Description:
      "یکی از متنوع‌ترین بخش‌های دیجی‌کالا، بخش لوازم خانه و آشپزخانه است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا انواع مبل راحتی، انواع آبگرمکن مثل آبگرمکن بوتان، لباسشویی‌های متنوع مثل انواع لباسشویی اسنوا، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای مشتریان فراهم کرده است. در بخش لوازم خانگی دیجی‌کالا، برندهای معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور دارند.",
  },
  {
    title: "محصولات بومی و محلی",
    Description:
      "و در آخر دیجی‌کالا از طریق به فروش رساندن محصولات بومی و سنتی متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به سفره هفت‌سین  و پذیرایی از مهمانان در روزهای نوروز، انواع آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید. دیجی‌کالا همچنین برای اینکه حال و هوای عید را به اعضای خود هدیه کند، تقویم ۱۴۰۱، انواع ایده عکس پروفایل عید نوروز، آهنگ‌های عی",
  },
]);
</script>

<template>
  <footer class="mt-12 border-t border-neutral100 pt-8">
    <!-- The upper part of the footer contains the support logo and the up button -->
    <div class="top-footer w-[93%] flex justify-between m-auto xl:w-[97%]">
      <div class="logo-support ">
        <div class="logo">
          <img src="@/assets/images/footer/digi.svg" alt="" class="w-28" />
        </div>
        <div class="support mt-6 text-neutral700 text-[11px] lg:text-[12px] flex items-center flex-col  lg:flex-row ">
          <p class="lg:ml-3">         تلفن پشتیبانی 61930000 - 021</p>
          <p class="hidden lg:flex lg:h-3 lg:w-[1px]  lg:bg-neutral700">  </p>
          <p class="mt-0 lg:mt-0 lg:mr-3 ">7 روز هفته , 24 ساعته پاسخگوی شما هستیم</p>
        </div>
      </div>
      <div
        class="
          btn-to-top
          h-10
          flex
          justify-around
          px-4
          items-center
          text-[#a1a3a8]
          w-36
          -mt-2
          rounded-md
        "
      >
        <button class="text-[13px] ">بازگشت به بالا</button>
        <div class="icon-top">
          <i class="uil uil-arrow-up"></i>
        </div>
      </div>
    </div>
    <!--In this section, you can see our services -->
    <div class="services lg:w-[90%] lg:mx-auto lg:my-12 lg:flex lg:justify-between hidden ">
      <div
        class="item-services lg:flex lg:justify-center lg:items-center lg:flex-col"
        v-for="services in imgServices"
        :key="services"
      >
        <img :src="services.imgServ" alt=""  class="lg:w-16 "/>
        <p class="lg:text-[#424750] lg:text-xs">{{ services.title }}</p>
      </div>
    </div>
    <!-- It is the menu and social networks section -->
    <div class="Menu w-[93%]  mt-9 lg:w-[97%]">
      <div class="items flex justify-around md:justify-between flex-wrap">
        <div class="item-menu">
          <div class="title-item-menu">
            <h3 class="text-[14px] text-[#424750] font-bold lg:text-[16px]">با دیجی کالا</h3>
          </div>
          <div class="list-menu mt-2">
            <ul class="text-[#81858b]">
              <li class="leading-9 text-sm">
                <a href="">اتاق خبر دیجی کالا</a>
              </li>
              <li class="leading-9 text-sm">
                <a href="">فروش در دیجی کالا</a>
              </li>
              <li class="leading-9 text-sm"><a href="">فرصت های شغلی</a></li>
              <li class="leading-9 text-sm">
                <a href="">گزارش تخلف در دیجی کالا</a>
              </li>
              <li class="leading-9 text-sm">
                <a href=""> تماس با دیجی کالا</a>
              </li>
              <li class="leading-9 text-sm">
                <a href=""> درباره دیجی کالا</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="item-menu">
          <div class="title-item-menu">
            <h3 class="text-[14px] text-[#424750] font-bold lg:text-[16px]">خدمات مشتریان</h3>
          </div>
          <div class="list-menu mt-2">
            <ul class="text-[#81858b]">
              <li class="leading-9 text-sm">
                <a href="">پاسخ به پرسش های متداول</a>
              </li>
              <li class="leading-9 text-sm">
                <a href=""> رویه باز گرداندن کالا</a>
              </li>
              <li class="leading-9 text-sm"><a href="">شرایط استفاده </a></li>
              <li class="leading-9 text-sm"><a href="">حریم خصوصی</a></li>
              <li class="leading-9 text-sm"><a href="">گزارش باگ</a></li>
            </ul>
          </div>
        </div>
        <div class="item-menu hidden md:grid h-3 ">
          <div class="title-item-menu">
            <h3 class="text-[14px] text-[#424750] font-bold lg:text-[16px] ">راهنمای خرید از دیجی کالا  </h3>
          </div>
          <div class="list-menu mt-2">
            <ul class="text-[#81858b] ">
              <li class="leading-9 text-sm">
                <a href="">اتاق خبر دیجی کالا</a>
              </li>
              <li class="leading-9 text-sm">
                <a href="">فروش در دیجی کالا</a>
              </li>
              <li class="leading-9 text-sm"><a href="">فرصت های شغلی</a></li>
             
             
            </ul>
          </div>
        </div>
        <div class="item-menu mt-3 w-full lg:w-[30%] xl:w-[27%]">
          <div
            class="title-item-menu w-[100%] flex justify-between 
            lg:relative lg:left-10 xl:left-0 items-center lg:flex-col "
          >
            <h3 class="text-[14px] text-[#424750] font-bold w-[50%] md:w-[70%] xl:w-[80%] lg:-mt-3 lg:text-[16px]">
              همراه ما باشید ..!
            </h3>
        <div class="flex justify-between lg:mt-6 xl:relative xl:left-6">
              <div
              class="Social-Networks "
              v-for="social in SocialNetworks"
              :key="social"
            >
              <img :src="social.img" alt="" class="w-7  lg:w-9 mr-7 xl:mr-12" />
            </div>
        </div>
          </div>
          <h2 class="hidden lg:flex lg:text-[14px] lg:mt-10 lg:font-semibold xl:text-[16px] xl:mr-7 ">با ثبت ایمیل , از جدید ترین خبر ها با خبر شوید </h2>
          <div class="mt-6 w-[100%] xl:mr-7">
            <input
              type="text"
              class="
                bg-[#f0f0f1]
                w-[87%]
                md:w-[92%]
                lg:w-[75%]
                h-10
                rounded
                px-6
                outline-0
              "
              placeholder="ایمیل شما"
            />
            <button class="mr-3 bg-[#e0e0e2] p-2 rounded-lg text-white">
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- In this section, there are ways to download our software -->
    <div class="pelatform w-full ">
      <div
        class="
          bg-[#3c4b6d]
          w-[93%] 
          mx-auto
          mt-6
          flex
          justify-center
          flex-col
          items-center
          pb-6
          rounded-lg
          lg:flex-row
          xl:w-[97%]
          xl:justify-between
          xl:px-4
          xl:pb-1
          xl:mt-9
          
        "
      >
        <div class="logo mt-4 flex lg:mt-7 xl:mt-2">
          <img
            src="@/assets/images/footer/footerlogo2.png"
            alt=""
            class="w-7 h-7 ml-3 lg:w-9 lg:h-9 xl:w-11 xl:h-11 "
          />
          <h2 class="text-white text-xl font-medium xl:text-xl  xl:font-medium xl:mt-1">دانلود اپلیکیشن دیجی کالا</h2>
        </div>
        <div
          class="app-pelatform flex justify-center flex-wrap mt-7 md:mt-4 px-16 lg:px-2 lg:items-center xl:mt-2"
        >
          <div
            class="item-img w-1/2 md:w-[22%] md:mr-2 flex justify-center lg:relative lg:right-6  "
            v-for="appImg in imgPelatform"
            :key="appImg"

          >
            <img :src="appImg.imgApp" alt="" class="w-36 mt-3"  />
          </div>
        </div>
      </div>
    </div>
    <!-- In this section, there are many explanations about our store -->
    <div class="Description-store mt-10 w-[93%] lg:w-[97%] mx-auto lg:flex">
      <div class="disc lg:w-[80%]">
        <div class="active" v-show="!showDescription">
          <h3 class="text-xs font-bold">
            فروشگاه اینترنتی دیجی کالا , بررسی خرید فروش آنلاین
          </h3>
          <p class="text-[11px] mt-3 leading-6 text-[#81858b]">
            یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی
            متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست
            مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که
            فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته
            از این طریق مشتریان ثابت خود را داشته باشد.
          </p>
          <p
            @click="showDescription = true"
            class="mt-5 text-xs text-[#19bfd3]"
          >
            مشاهده بیشتر <i class="uil uil-arrow-left text-[#19bfd3]mt-2"></i>
          </p>
        </div>
        <div class="more" v-show="showDescription">
          <div class="item" v-for="data in Description" :key="data">
            <h3 class="text-xs font-bold mt-3 xl:text-sm">{{ data.title }}</h3>
            <p class="text-[11px] mt-3 leading-6 text-[#81858b] xl:text-[13px]">
              {{ data.Description }}
            </p>
          </div>
          <p
            @click="showDescription = false"
            class="mt-5 text-xs text-[#19bfd3]"
          >
            بستن
          </p>
        </div>
      </div>
      <!-- namad -->
      <div class="namad w-full m-auto mt-5 lg:w-[30%]">
        <div class="item-img w-full flex justify-center">
          <img
            src="@/assets/images/footer/rezi.png"
            alt=""
            class="w-[90px] h-[90px] mr-3 rounded"
          />
          <img
            src="@/assets/images/footer/kasbokar.png"
            alt=""
            class="w-[90px] h-[90px] mr-3 rounded"
          />
          <img
            src="@/assets/images/footer/enamad.png"
            alt=""
            class="w-[90px] h-[90px] mr-3 rounded"
          />
        </div>
      </div>
    </div>
    <!-- This section is copyrighted -->
    <div class="CopyRight w-full">
      <p class="w-[93%] text-[#81858b] text-[10px] mx-auto text-center mt-5">
        برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
        کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه
        آنلاین دیجی‌کالا) است.
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer .top-footer .btn-to-top {
  border: 1px solid #e0e0e2;
}
.item-menu input::placeholder {
  font-size: 0.8rem;
}
.namad img {
  border: 1px solid #e0e0e2;
  padding: 10px;
}

</style>