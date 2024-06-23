import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import List from '../List.vue'

describe('List', () => {
  it('renders properly', () => {
    const wrapper = mount(List, { props: { title: 'Ilocos Region' } })
    expect(wrapper.text()).toContain('Ilocos Region')
  })
})
