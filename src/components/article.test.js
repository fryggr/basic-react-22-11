import React, { Component } from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Article from './article'
import articles from '../fixtures'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should open comments list on click', () => {
    const container = mount(<Article article={articles[0]} isOpen={true} />)

    expect(container.find('.test__comments-body').length).toEqual(1)

    container
      .find('.test__comments--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comments-body').length).toEqual(1)
  })

  it('should load article on mount', () => {
    let callackWasCalled = false
    mount(
      <Article
        article={articles[0]}
        isOpen={true}
        fetchAllArticles={() => (callackWasCalled = true)}
      />
    )

    expect(callackWasCalled).toBe(true)
  })

  it("should render article's text by default", () => {
    const container = render(<Article article={articles[0]} isOpen={true} />)

    expect(container.find('.test__article-text').text().length > 0).toEqual(true)
  })
})
