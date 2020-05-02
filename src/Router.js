import React, { Suspense } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import { Devices } from '@/screens'

import { Header, Sidebar } from '@/containers'

export default function Router() {
  return (
    <Suspense fallback={<div>loading</div>}>
      <HashRouter>
        <Switch>
          <Sidebar>
            <Header>
              <Route path="/" exact component={Devices} />
            </Header>
          </Sidebar>
        </Switch>
      </HashRouter>
    </Suspense>
  )
}
