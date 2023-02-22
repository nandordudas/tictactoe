import type { Document } from 'openapi-backend'

export const definition: string | Document = {
  openapi: '3.0.2',
  info: {
    title: 'API',
    version: '0.1.0',
  },
  servers: [
    {
      url: 'http://localhost:3332',
    },
    {
      url: 'http://localhost:3333',
    },
  ],
  paths: {
    '/': {
      get: {
        tags: [
          'welcome',
        ],
        operationId: 'welcome',
        responses: {
          200: {
            description: 'Welcome',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Something',
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Something: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
            example: 'Welcome',
          },
          version: {
            type: 'string',
            example: '0.1.0',
          },
        },
      },
    },
  },
}