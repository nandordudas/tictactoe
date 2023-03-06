import '@testing-library/jest-dom'

import { createRequestHandlersFromOpenAPISpec as apiSpec } from '@workspace/msw-open-api'
import { setupServer } from 'msw/node'

import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const definition = resolve(fileURLToPath(new URL('.', import.meta.url)), 'api-spec.yml')
const handler = await apiSpec({ definition })
const server = setupServer(handler)

server.listen({ onUnhandledRequest: 'bypass' })
