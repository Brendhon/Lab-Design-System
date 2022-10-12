import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from './Text';

// Config Data
const Config: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()}
          <Text size='sm'>Lembrar de mim por 30 dias</Text>
        </div>
      )
    }
  ]
}

export default Config;

export const Default: StoryObj<CheckboxProps> = { }
