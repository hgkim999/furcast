import { GraphQLScalarType } from 'graphql';

export const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'A valid ISO-8601 DateTime scalar',
  serialize(value) {
    if (!(value instanceof Date) && typeof value !== 'string') {
      throw new Error('Invalid DateTime value');
    }
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid DateTime format');
    }
    return date.toISOString(); // Ensure proper ISO string
  },
  parseValue(value: unknown) {
    if (
      typeof value !== 'string' &&
      typeof value !== 'number' &&
      !(value instanceof Date)
    ) {
      throw new Error('Invalid DateTime value');
    }
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid DateTime format');
    }
    return date;
  },
  parseLiteral(ast) {
    if (ast.kind !== 'StringValue') {
      throw new Error('DateTime must be a string');
    }
    const date = new Date(ast.value);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid DateTime format');
    }
    return date;
  },
});
