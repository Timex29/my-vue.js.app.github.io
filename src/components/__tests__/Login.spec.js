import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import LoginComponent from '../LoginView.vue'

describe('Login page', () => {
  test('renders properly @timex', async () => {
    const wrapper = mount(LoginComponent)

    expect(LoginComponent).toMatchSnapshot()

    const username = 'timex'
    const password = ''

    await wrapper.find('input[type=text]').setValue(username)
    await wrapper.find('input[type=password]').setValue(password)

    await wrapper.find('form').trigger('submit.prevent')
    await wrapper.find('.link a')

    expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
      username,
      password
    })
  })
})
test('throws an error for non existing users', async () => {
  expect(async () => await LoginComponent('fakeuser')).rejects.toThrowError()
})
