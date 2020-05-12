import React from 'react'
import * as Headable from 'next/head'

export const Head = memo(() => (
  <Headable>
    <title>{t('translation:landing.meta.title')}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <meta property="og:url" content="https://responsivy.com" />
    <meta property="og:type" content="product" />
    <meta property="og:site_name" content="Responsivy" />
    <meta property="og:title" content={t('translation:landing.meta.title')} />

    <meta
      property="og:description"
      content={t('translation:landing.meta.description')}
    />
    <meta
      property="og:image"
      content="http://responsivy.com/assets/images/meta-picture.jpg"
    />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="https://responsivy.com" />
    <meta name="twitter:title" content={t('translation:landing.meta.title')} />
    <meta
      name="twitter:description"
      content={t('translation:landing.meta.description')}
    />
    <meta
      name="twitter:image"
      content="https://responsivy.com/assets/images/meta-picture.jpg"
    />
  </Headable>
))
