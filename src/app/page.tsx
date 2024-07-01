'use client'

import tw from '@/utilities/tw'
import MainLayout from '@/layouts/MainLayout'

const classes = {
  container: tw(`relative w-full min-h-[100vh] flex bg-green-500`),
  signInSection: tw(`w-[56%] xl:w-full flex items-center justify-center`),
  signInFlexBox: tw(`w-[47.6%] flex flex-col gap-10`),
  signInTitle: tw(`text-[28px] leading-[34px] font-semibold text-white`),
  inputAndBtn: tw(`w-full flex flex-col gap-5`),
  signInBtn: tw(
    `ibm-font w-full h-10 px-4 py-[10px] flex items-center justify-center bg-success text-white border border-success rounded-lg`,
  ),
  brandSection: tw(
    `relative right-0 w-[44%] max-w-[632px] xl:min-w-[632px] flex flex-col
    items-center justify-center gap-[42px] bg-green-300 rounded-l-[36px]`,
  ),
  brandLogo: tw(`w-full h-auto max-w-[299.61px] max-h-[230px]`),
  brandTitle: tw(`brand-font text-[28px] leading-[24px] italic font-normal text-white`),
}

export default function Home() {
  return (
    <MainLayout>
      <div></div>
    </MainLayout>
  )
}
