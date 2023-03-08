<template>
  <MDBottomNavigation selectedIndex="0">
    <!-- The bottom tab UI is created via TabStrip (the containier) and TabStripItem (for each tab)-->
    <MDTabStrip class="bg-[#0157C8]">
      <MDTabStripItem class="text-white">
        <Label text="Home"></Label>
        <Image src="~/assets/icons/home.png"></Image>
      </MDTabStripItem>
      <MDTabStripItem class="text-white">
        <Label text="Chat"></Label>
        <Image src="~/assets/icons/chat.png"></Image>
      </MDTabStripItem>
      <MDTabStripItem class="text-white">
        <Label text="Booking"></Label>
        <Image src="~/assets/icons/calendar.png" class="fas"></Image>
      </MDTabStripItem>
      <MDTabStripItem class="text-white">
        <Label text="Profile"></Label>
        <Image src="~/assets/icons/profile.png" class="fas"></Image>
      </MDTabStripItem>
    </MDTabStrip>

    <!-- The number of TabContentItem components should corespond to the number of TabStripItem components -->
    <MDTabContentItem>
      <Home />
    </MDTabContentItem>
    <MDTabContentItem>
      <GridLayout>
        <Label text="Chat Page" class="h2 text-center"></Label>
      </GridLayout>
    </MDTabContentItem>
    <MDTabContentItem>
      <GridLayout>
        <Label text="Booking Page" class="h2 text-center"></Label>
      </GridLayout>
    </MDTabContentItem>
    <MDTabContentItem>
      <GridLayout>
        <Label text="Profile Page" class="h2 text-center"></Label>
      </GridLayout>
    </MDTabContentItem>
  </MDBottomNavigation>
</template>

<script>
import Home from "../pages/Home.vue";

export default {
  components: {
    Home,
  },
};
</script>

<style lang="scss">
</style>
