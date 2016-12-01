import * as React from 'react'
import * as classNames from 'classnames'

interface IButtonProps {
  /** A function to call on click. */
  readonly onClick?: () => void

  /** The title of the button. */
  readonly children?: string

  /** Is the button disabled? */
  readonly disabled?: boolean

  /** Whether the button is a submit. */
  readonly type?: 'submit'

  /** CSS class names */
  readonly className?: string
}

/** A button component. */
export class Button extends React.Component<IButtonProps, void> {
  public render() {
    const className = classNames('button-component', this.props.className)

    return (
      <button
        className={className}
        disabled={this.props.disabled}
        onClick={this.onClick}
        type={this.props.type}>
        {this.props.children}
      </button>
    )
  }

  private onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (this.props.type !== 'submit') {
      event.preventDefault()
    }

    const onClick = this.props.onClick
    if (onClick) {
      onClick()
    }
  }
}
