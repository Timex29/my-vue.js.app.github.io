import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly @timex', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello timex' } })
    expect(wrapper.text()).toContain('Hello timex')
  })
})
