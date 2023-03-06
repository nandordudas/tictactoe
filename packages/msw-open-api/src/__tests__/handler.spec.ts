import axios from 'axios'
import { setupServer } from 'msw/node'

import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { definition } from './definition'
import { createRequestHandlersFromOpenAPISpec } from '..'

const root = fileURLToPath(new URL('.', import.meta.url))

describe.each([
  { name: 'with inline config', definition },
  { name: 'with config file', definition: resolve(root, 'api-spec.yml') },
])('msw Open API handler $name', async ({ definition }) => {
  const handler = await createRequestHandlersFromOpenAPISpec({ definition })
  const server = setupServer(handler)
  const client = axios.create({ baseURL: 'http://localhost:3333' })

  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
  beforeEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('should create mock handlers from Open API spec', async () => {
    const { data, status } = await client.get('/')

    expect(data).toEqual({ description: 'Welcome', version: '0.1.0' })
    expect(status).toEqual(200)
  })

  it('should return not found if path does not exists', async () => {
    await expect(client.get('/not-found')).rejects.toThrow('Request failed with status code 404')
  })
})
