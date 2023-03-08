<template>
  <StackLayout class="px-3 mt-5">
    <FlexboxLayout class="bg-yellow-300 rounded-xl text-[#0157C8]">
      <FlexboxLayout class="px-8 py-0">
        <FlexboxLayout flexDirection="column" width="65%" class="py-6">
          <Label text="Today's Offer" class="text-3xl" />
          <Label
            text="Get discount for every order only valid for today"
            class="text-xl leading-normal"
            textWrap="true"
          />
        </FlexboxLayout>
        <AbsoluteLayout>
          <Image src="~/assets/images/g331.png" class="w-16" top="30" />
        </AbsoluteLayout>
      </FlexboxLayout>
    </FlexboxLayout>
  </StackLayout>
</template>