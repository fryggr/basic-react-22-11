import React from 'react'

export default (OriginalComponent) =>
  class AccordionComponent extends React.Component {
    state = {
      openItemId: false
    }

    toggleOpenItem = () => {
      this.setState((state) => {
        return {
          openItemId: !state.openItemId
        }
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          openItemId={this.state.openItemId}
          toggleOpenItem={this.toggleOpenItem}
        />
      )
    }
  }
