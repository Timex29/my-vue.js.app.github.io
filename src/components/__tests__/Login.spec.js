import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'


import LoginComponent from '../UserLogin.vue'

describe('Login page attributes', () => {
  test('renders properly @timex', async () => {
    const wrapper = mount(LoginComponent)

    expect(LoginComponent).toMatchSnapshot()

    //const username = 'timex'
    //const password = ''

    //await wrapper.find('input[type=text]').setValue(username)
    //await wrapper.find('input[type=password]').setValue(password)

    //await wrapper.find('form').trigger('submit.prevent')
    //await wrapper.find('.link a')
    

   

    //expect(wrapper.emitted('submit')[0][0]).toStrictEqual({
      //username,
      //password
    //})

    expect(await wrapper.html()).toContain('Sign in')
    expect(wrapper.find('.box').exists()).toBe(true)
    expect(wrapper.find('.input').exists()).toBe(true)
    expect(wrapper.find('.inputBox').exists()).toBe(true)

   


    await wrapper.find('[ data-type = "submit"]').trigger('click')
   
  })
  test('throws an error for non existing users', async () => {
    expect(async () => await LoginComponent('fakeuser')).rejects.toThrowError()
  
  })
  
})

