<template>
  <StackLayout class="bg-[#0157C8] py-5 px-3 rounded-br-md rounded-bl-md">
    <FlexboxLayout justifyContent="space-between">
      <FlexboxLayout>
        <Image src="~/assets/images/avatar.png" class="w-12 h-12 mr-5" />
        <FlexboxLayout flexDirection="column" class="text-white">
          <Label text="Welcome" class="text-2xl" />
          <Label text="Dani Martinez" class="text-lg" />
        </FlexboxLayout>
      </FlexboxLayout>
      <FlexboxLayout>
        <Image src="~/assets/icons/bell.png" class="w-4 h-4" />
      </FlexboxLayout>
    </FlexboxLayout>
    <StackLayout class="m-0 mt-5">
      <FlexboxLayout class="bg-white rounded-md px-3">
        <TextField
          hint="Search"
          class="bg-white border-b border-b-transparent text-2xl text-gray-400 placeholder:text-gray-400"
          width="85%"
        />
        <Image src="~/assets/icons/search.png" class="w-10 h-10" />
      </FlexboxLayout>
    </StackLayout>
  </StackLayout>
</template>