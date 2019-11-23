# react-simple-layouts

> create simple layouts using containers and grids

[![NPM](https://img.shields.io/npm/v/react-simple-layouts.svg)](https://www.npmjs.com/package/react-simple-layouts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-simple-layouts
```

## Usage

```tsx
import * as React from "react";
import { Container, Grid } from "react-simple-layouts";

export const Example = () => (
    <Container
      bgColor="black"
      textColor="white"
      top="55px"
      bottom="35px"
      initialSides="10%"
    >
      <Grid columns="3" gap="20px" rows="1">
        { Your code here}
      </Grid>
    </Container>
  );
```

## Prop Defaults

### Container

- bgColor = "#fff",
- textColor = "#000",
- top = "1.2rem",
- bottom = "1.2rem",
- initialSides = "5%",

### Grid

- rows = "1",
- gap = "10px",

## License

MIT © [paulolramos](https://github.com/paulolramos)
