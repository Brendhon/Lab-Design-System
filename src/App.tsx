import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Logo } from './Logo'
import './styles/global.css'

export function App() {
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>

      {/* Header - Logo | Title | Desc */}
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

      {/* Form - E-mail | Pass | Button  */}
      <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>

        {/* Email Input */}
        <label htmlFor="email" className='flex flex-col gap-3'>

          {/* Label */}
          <Text className='font-semibold'> Endereço de e-mail </Text>

          {/* Input */}
          <TextInput.Root>

            {/* Icon */}
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            {/* Input */}
            <TextInput.Input type="email" id="email" placeholder='Digite seu e-mail' />

          </TextInput.Root>
        </label>


        {/* Pass Input */}
        <label htmlFor="pass" className='flex flex-col gap-3'>

          {/* Label */}
          <Text className='font-semibold'> Sua senha </Text>

          {/* Input */}
          <TextInput.Root>

            {/* Icon */}
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            {/* Input */}
            <TextInput.Input type="password" id="pass" placeholder='******' />

          </TextInput.Root>
        </label>

        {/* Checkbox */}
        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        {/* Button */}
        <Button type='submit' className='mt-4'>
          Entrar na Plataforma
        </Button>
      </form>

      {/* Footer - Forgot | Register */}
      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text size='sm' className='text-gray-400 underline hover:text-gray-200'>
          <a href="">Esqueceu sua senha?</a>
        </Text>
        <Text size='sm' className='text-gray-400 underline hover:text-gray-200'>
          <a href="">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>

    </div>
  )
}
