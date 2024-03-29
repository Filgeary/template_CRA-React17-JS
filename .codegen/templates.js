// component.jsx
exports.component = name => `import React from 'react'
import styles from './${name}.module.css'

const ${name} = () => {
  return (
    <div>
      <h2 className={styles.heading}>${name}-component</h2>
      <button type='button'>${name}-button</button>
    </div>
  )
}

export default ${name}
`

// component.test.jsx
exports.test = name => `import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ${name} from './${name}'

describe('${name}', () => {
  it('should render Heading & click on button', () => {
    render(<${name} />)
    expect(screen.getByRole('heading', { name: /${name}-component/i })).toBeInTheDocument()
    userEvent.click(screen.getByRole('button', { name: /${name}-button/i }))
  })
})
`

// index.js
exports.barrel = name => `import ${name} from './${name}'
export default ${name}
`
