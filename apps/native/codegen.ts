import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../../packages/core/graphql/schema.gql',
  documents: ['app/**/*.ts?(x)', '!src/gql/**/*', 'components/**/*.ts?(x)'],
  emitLegacyCommonJSImports: true,
  generates: {
    './gql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: false,
      },
      config: {
        scalars: {
          Date: 'string',
          DateTime: 'string',
        },
      },
    },
  },
  config: {
    namingConvention: {
      enumValues: 'keep',
    },
  },
};

export default config;
