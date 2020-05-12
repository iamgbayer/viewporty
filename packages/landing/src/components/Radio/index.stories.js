import React from 'react'
import { storiesOf } from '@storybook/react'

import { GROUPS } from '@helpers/hierarchySeparators'
import { Container } from '@helpers/components/Container'

import { Reset } from '@components/Reset'
import { Radio } from '@components/Radio'

storiesOf(`${GROUPS.COMPONENTS}|Radio`, module)
  .addDecorator(story => (
    <Container>
      <Reset />
      {story()}
    </Container>
  ))
  .add('Variant', () => (
    <>
      <Radio name="sort" orientation="column" labelAlign="right">
        <Radio.Option id="trending" label="Trending" bottom={5} />
        <Radio.Option id="top" label="Top" bottom={5} />
        <Radio.Option id="newest" label="Newest" bottom={5} />
        <Radio.Option id="oldest" label="Oldest" bottom={5} />
      </Radio>

      <Radio name="owner" variant="secondary">
        <Radio.Option id="all" label="All" bottom={5} />
        <Radio.Option id="noOwner" label="No Owner" bottom={5} />
        <Radio.Option id="me" label="Me" bottom={5} />
      </Radio>
    </>
  ))
