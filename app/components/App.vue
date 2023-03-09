<template>
  <Page
    actionBarHidden="true"
    @navigatedTo="onNavigatedTo"
    @navigatingTo="onNavigatingTo"
  >
    <MDBottomNavigation v-if="isOpened" :selectedIndex="selectedIndex">
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
        <MDTabStripItem class="text-white" @tap="gotoProfile">
          <Label text="Profile"></Label>
          <Image src="~/assets/icons/profile.png" class="fas"></Image>
        </MDTabStripItem>
      </MDTabStrip>

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
        <Label text="profile" class="" />
      </MDTabContentItem>
    </MDBottomNavigation>
  </Page>
</template>

<script>
import Home from "../pages/Home.vue";
import Profile from "../pages/Profile.vue";

export default {
  components: {
    Home,
  },
  data() {
    return {
      selectedIndex: 0,
      isOpened: true,
    };
  },
  methods: {
    onNavigatingTo() {
      this.isOpened = true;
      this.selectedIndex = 0;
    },
    onNavigatedTo() {},
    gotoProfile() {
      this.isOpened = false;
      this.$navigateTo(Profile, {
        transition: {
          name: "slideLeft",
          duration: 100,
          curve: "easeIn",
        },
      });
    },
  },
};
</script>

<style lang="scss">
</style>
