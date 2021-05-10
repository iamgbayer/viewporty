import React from 'react'
import Headable from 'next/head'

export default function Head() {
  return (
    <Headable>
      <title>Viewporty</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:url" content="https://viewporty.com" />
      <meta property="og:type" content="product" />
      <meta property="og:site_name" content="Viewporty" />
      <meta property="og:title" content="Viewporty" />

      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <meta
        property="og:description"
        content="Making and testing responsive has never been easier."
      />
      <meta
        property="og:image"
        content="http://viewporty.com/assets/images/meta-picture.jpg"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="https://viewporty.com" />
      <meta name="twitter:title" content="Viewporty" />
      <meta
        name="twitter:description"
        content="Making and testing responsive has never been easier."
      />
      <meta
        name="twitter:image"
        content="https://viewporty.com/assets/images/meta-picture.jpg"
      />
    </Headable>
  )
}
