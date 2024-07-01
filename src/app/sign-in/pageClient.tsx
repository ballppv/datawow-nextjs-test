'use client'

import Image from 'next/image'
import tw from '@/utilities/tw'
import SignInButton from '@/components/button/SignInButton'

const classes = {
  container: tw(
    `relative w-full h-[100vh] md:min-h-[100vh] flex flex-col-reverse md:flex-row justify-end bg-green-500`,
  ),
  signInSection: tw(`md:w-[56%] xl:w-full h-full px-4 flex items-center justify-center`),
  signInFlexBox: tw(
    `max-w-[343px] md:max-w-none md:min-w-[343px] w-full md:w-[47.6%] flex flex-col gap-10`,
  ),
  signInTitle: tw(`text-[28px] leading-[34px] font-semibold text-white`),
  inputAndBtn: tw(`w-full flex flex-col gap-5`),
  signInBtn: tw(`w-full h-10 px-4 py-[10px]`),
  brandSection: tw(
    `relative md:right-0 md:w-[44%] md:max-w-[632px] xl:min-w-[632px] min-h-[362px] md:h-auto px-16 flex flex-col
    items-center justify-center gap-7 md:gap-[42px] bg-green-300 rounded-b-[36px] md:rounded-l-[36px]`,
  ),
  brandLogo: tw(
    `w-full h-auto max-w-[171.46px] md:max-w-[299.61px] max-h-[131.62px] md:max-h-[230px]`,
  ),
  brandTitle: tw(
    `brand-font text-[24px] md:text-[28px] leading-[24px] italic font-normal text-white`,
  ),
}

const SignIn = () => {
  return (
    <div className={classes.container}>
      <div className={classes.signInSection}>
        <div className={classes.signInFlexBox}>
          <div className={classes.signInTitle}>Sign in</div>
          <div className={classes.inputAndBtn}>
            <SignInButton styleContainer={classes.signInBtn} />
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

export default SignIn
