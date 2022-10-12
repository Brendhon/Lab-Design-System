import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";

// Config Data
const Config: Meta<TextProps> = {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
}

export default Config;

export const Default: StoryObj<TextProps> = { }

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>CustomComponent</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
}