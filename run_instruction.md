# Run instructions

A React single-page application built with Hooks and TypeScript, following Clean
Architecture, TDD, design patterns and SOLID principles. It is the front-end counterpart
of `clean-ts-api` and the reference implementation used to teach the approach.

## Prerequisites

Node.js 16 or newer, with npm.

## Install and run

```bash
npm ci
npm run dev        # webpack-dev-server, opens the browser
```

The development server proxies API calls to the address configured in `webpack.dev.js`.
Point it at a running `clean-ts-api` instance, or at any API exposing the same contract.

## Build

```bash
npm run build      # webpack --config webpack.prod.js
npm start          # node index — serves the built bundle with Express
```

## Tests

```bash
npm test           # Jest
npm run test:watch
npm run test:ci    # with coverage
```

The suite runs with `NODE_ICU_DATA=node_modules/full-icu` because the currency and date
formatting under test depends on full ICU data, which the default Node build does not
carry.

## Checks

```bash
npm run lint
npm run lint:fix
```

## Layout

```
src/domain/          Models, use-case contracts and domain errors
src/data/            Use-case implementations, depending only on domain contracts
src/infra/           HTTP client and local storage adapters
src/presentation/    Components, pages and the presentation-level contracts
src/main/            Composition root: factories, routes, adapters, decorators
src/validation/      Validator implementations and the builder that composes them
```

State is handled with Recoil, and the composition root in `src/main/` is the only place
where a concrete implementation is chosen — pages receive their use cases as props.
