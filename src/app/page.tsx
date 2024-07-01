'use client'

import Image from 'next/image'
import tw from '@/utilities/tw'
import ButtonBorder from '@/components/ButtonBorder'

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
    <div className={classes.container}>
      <div className={classes.signInSection}>
        <div className={classes.signInFlexBox}>
          <div className={classes.signInTitle}>Sign in</div>
          <div className={classes.inputAndBtn}>
            <ButtonBorder className={classes.signInBtn} onClick={() => {}}>
              <div>Sign In</div>
            </ButtonBorder>
          </div>
        </div>
      </div>

      <div className={classes.brandSection}>
        <Image
          src="/images/main-logo.png"
          alt="main-logo"
          className={classes.brandLogo}
          width={299.61}
          height={230}
        />
        <div className={classes.brandTitle}>a Board</div>
      </div>
    </div>
  )
}
