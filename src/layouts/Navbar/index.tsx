import React from 'react'
import SignInButton from '@/components/button/SignInButton'
import tw from '@/utilities/tw'
import Icon from '@/components/Icon'
import { Drawer } from 'antd'

const classes = {
  container: tw(
    `relative w-full h-[72px] md:h-[60px] pr-3 pl-4 md:px-8 flex items-center justify-between bg-green-500`,
  ),
  brandTitle: tw(`brand-font text-[20px] leading-[24px] italic font-normal text-white`),
  signInBtn: tw(`hidden md:flex max-w-[105px] h-10 px-4 py-[10px]`),
  menuIcon: tw(`w-10 h-10 flex md:hidden items-center justify-center cursor-pointer`),
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
          // wrapper: { transform: 'translateY(0px) !important', borderTopLeftRadius: 12 },
          header: { display: 'none' },
          body: {
            backgroundColor: '#FFF',
            padding: 0,
          },
        }}
        // rootStyle={{ position: 'relative' }}
      >
        <div>Menu</div>
      </Drawer>
    </div>
  )
}

export default Navbar
