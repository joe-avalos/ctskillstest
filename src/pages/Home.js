import React from 'react'
import {Container} from "@material-ui/core";

export default function Home() {
  return (
    <Container maxWidth="md">
      <h1 className="contentTitle">Home</h1>
      <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex mauris, sollicitudin at elementum quis,
        bibendum id justo. Vestibulum pretium lacinia laoreet. Integer sed massa quam. In hac habitasse platea dictumst.
        Maecenas varius pulvinar egestas. Suspendisse potenti. Aliquam pharetra dolor in urna pharetra, quis imperdiet
        lacus faucibus. Morbi commodo orci at arcu rutrum iaculis. Donec egestas velit ac vehicula accumsan. In eu nulla
        risus. Duis orci arcu, scelerisque sit amet mauris ut, dictum tincidunt felis.</p>
    </Container>
  )
}
