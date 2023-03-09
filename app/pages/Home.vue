<template>
  <StackLayout class="bg-[#F4F6FF]">
    <Header />
    <ScrollView>
      <GridLayout columns="*" rows="auto,auto,auto">
        <Slider row="0" />
        <Services row="1" />
        <TopHandyman row="2" />
      </GridLayout>
    </ScrollView>
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