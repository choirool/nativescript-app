<template>
  <StackLayout class="px-3 mt-3">
    <Label text="Our Service" class="text-2xl text-gray-900 font-semibold" />
    <WrapLayout>
      <StackLayout
        width="25%"
        v-for="(service, index) in services"
        :key="index"
        class="text-center"
      >
        <StackLayout class="bg-white w-20 h-20 rounded-md p-5">
          <Image :src="`~/assets/icons/${service.icon}`" />
        </StackLayout>
        <Label :text="service.name" class="text-base mb-2" />
      </StackLayout>
    </WrapLayout>
  </StackLayout>
</template>

<script>
export default {
  data() {
    return {
      services: [
        { name: "Plumbing", icon: "Plumbing.png" },
        { name: "Repairing", icon: "Repairing.png" },
        { name: "Electrical", icon: "Electrical.png" },
        { name: "Carpentry", icon: "Carpentry.png" },
        { name: "Cleaning", icon: "Cleaning.png" },
        { name: "Painting", icon: "Painting.png" },
        { name: "Moving", icon: "Moving.png" },
        { name: "Handyman", icon: "Handyman.png" },
      ],
    };
  },
};
</script>