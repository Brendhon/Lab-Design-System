import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

// Config Data
const Config: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account'
  },
  argTypes: {}
}

export default Config;

export const Default: StoryObj<ButtonProps> = { }

