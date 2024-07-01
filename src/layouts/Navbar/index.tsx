import React from 'react'
import SignInButton from '@/components/button/SignInButton'
import tw from '@/utilities/tw'
import Icon from '@/components/Icon'
import { Drawer } from 'antd'
import { useRouter } from 'next/navigation'
import { TIconName } from '@/components/Icon/interface'

const classes = {
  container: tw(
    `relative w-full h-[72px] md:h-[60px] pr-3 pl-4 md:px-8 flex items-center justify-between bg-green-500`,
  ),
  brandTitle: tw(`brand-font text-[20px] leading-[24px] italic font-normal text-white`),
  signInBtn: tw(`hidden md:flex max-w-[105px] h-10 px-4 py-[10px]`),
  menuIcon: tw(`w-10 h-10 flex md:hidden items-center justify-center cursor-pointer`),
  mobileMenuContainer: tw(`flex flex-col gap-9`),
  closeBtn: tw(`w-[82px] h-6 px-8 py-[6px] flex items-center justify-center`),
  menuList: tw(`w-full px-4 flex flex-col gap-1`),
  eachMenu: tw(`w-full px-3 py-2 flex gap-2 items-center`),
  eachMenuText: tw(`text-md`),
}

const EachMenu = (icon: TIconName, iconSize: number, text: string, link: string) => {
  const router = useRouter()

  return (
    <div className={classes.eachMenu} onClick={() => router.push(link)}>
      <Icon name={icon} size={iconSize} fill={icon === 'home' ? '#D8E9E4' : '#BBC2C0'} />
      <div
        className={tw(classes.eachMenuText, icon === 'home' ? 'text-green-100' : 'text-grey-100')}
      >
        {text}
      </div>
    </div>
  )
}

const Navbar: React.FC = () => {
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.brandTitle}>a Board</div>
      <SignInButton styleContainer={classes.signInBtn} />
      <div className={classes.menuIcon} onClick={() => setOpenMobileMenu(true)}>
        <Icon name="menu" size={24} fill="#FFF" />
      </div>

      <Drawer
        placement="right"
        open={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
        width={'280px'}
        height={'100%'}
        styles={{
          header: { display: 'none' },
          content: {
            backgroundColor: 'var(--green-500)',
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12,
            color: '#FFF',
          },
          body: {
            padding: '32px 0px',
          },
        }}
      >
        <div className={classes.mobileMenuContainer}>
          <div className={classes.closeBtn} onClick={() => setOpenMobileMenu(false)}>
            <Icon name="arrowRight" width={16} height={12} fill="#FFF" />
          </div>

          <div className={classes.menuList}>
            {EachMenu('home', 24, 'Home', '/')}
            {EachMenu('write', 24, 'Our Blog', '/write')}
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar
