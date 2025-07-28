'use client'

import { useState } from 'react'

export function ClientComponentTest() {
  const [state, setState] = useState(false)

  return (
    <button
      onClick={() => setState((state) => !state)}
      title="Search (Cmd+K)"
      style={{
        backgroundColor: 'transparent',
        cursor: 'pointer'
      }}
    >
      <span style={{ backgroundColor: state ? 'red' : 'green', fontSize: '4em' }}>🧡</span>
    </button>
  )
}
