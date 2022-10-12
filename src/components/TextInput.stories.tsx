import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from 'phosphor-react'

// Config Data
const Config: Meta<TextInputRootProps> = {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder='Type your e-mail' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
  }
}

export default Config;

export const Default: StoryObj<TextInputRootProps> = {}

