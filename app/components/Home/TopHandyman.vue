<template>
  <StackLayout class="px-3 mt-3">
    <Label text="Top Handyman" class="text-2xl text-gray-900 font-semibold" />
    <FlexboxLayout class="bg-white rounded-md">
      <StackLayout class="mr-3">
        <Image src="~/assets/images/g403.png" class="w-32 m-1" />
      </StackLayout>
      <StackLayout>
        <Label text="Jonathan Patterson" class="text-2xl text-gray-900" />
        <Label text="Handyman Specialist" class="text-[#222222] text-lg" />
        <FlexboxLayout class="p-2">
          <Image src="~/assets/icons/star.png" class="w-5 mx-1" />
          <Label text="4.9 (37 Reviews)" class="text-base text-gray-400" />
        </FlexboxLayout>
      </StackLayout>
    </FlexboxLayout>
  </StackLayout>
</template>