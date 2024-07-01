import tw from '@/utilities/tw'
import ButtonBorder from '@/components/button/ButtonBorder'

interface SignInButtonProps {
  styleContainer?: string
}

const classes = {
  baseContainer: tw(
    `ibm-font w-full flex items-center justify-center bg-success text-white border border-success rounded-lg`,
  ),
}

const SignInButton = ({ styleContainer }: SignInButtonProps) => {
  return (
    <ButtonBorder className={tw(classes.baseContainer, styleContainer)} onClick={() => {}}>
      <div>Sign In</div>
    </ButtonBorder>
  )
}

export default SignInButton
