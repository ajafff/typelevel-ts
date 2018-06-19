import * as React from 'react'
import { Diff } from 'typelevel-ts'

function withDefaults<A extends D, D extends object>(C: React.ComponentType<A>, defaults: D): React.SFC<Diff<A, D>> {
  return props => <C {...defaults} {...props} />
}

class Foo extends React.Component<{ bar: string; baz: number }> {}
const DefaultedFoo = withDefaults(Foo, { baz: 1 })
const x = <DefaultedFoo bar="bar" /> // ok
