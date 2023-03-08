<template>
  <StackLayout class="bg-[#F4F6FF]">
    <Header />
    <Slider />
    <Services />
    <TopHandyman />
  </StackLayout>
</template>

<script>
import Header from "../components/Home/Header.vue";
import Slider from "../components/Home/Slider.vue";
import Services from "../components/Home/Services.vue";
import TopHandyman from "../components/Home/TopHandyman.vue";
export default {
  components: {
    Header,
    Slider,
    Services,
    TopHandyman,
  },
};
</script>