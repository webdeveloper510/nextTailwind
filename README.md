# Skipify

## Installation

1. Clone the repository
1. Install dependencies: `yarn`

### Start development server

```
yarn dev
```

### Start production server

```
yarn build
yarn start
```

## Prismic

You should **never** create neither `custom types` nor `slices` in Prismic's Dashboard. That's what the `slicemachine` is for.

You should only use Prismic to populate content in the `Documents` section in [skipify.prismic.io](https://skipify.prismic.io/).

## Slicemachine

Slicemachine is the tool that should be used to generate `custom types` and `slices`. Here is a guide on how to do so.

1. Open slicemachine

```
yarn slicemachine
```

2. Create slice or custom type and add the necessary fields.
3. Click `Save model to filesystem` to store the JSON object for what you just created and push this file to the repository.
4. Click `Push to prismic` for the new thing to be available in Prismic.