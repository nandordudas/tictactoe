import { rest } from 'msw'
import { OpenAPIBackend, type Options } from 'openapi-backend'

const pathRE: string | RegExp = /.*/

export async function createRequestHandlersFromOpenAPISpec(options: Options) {
  const api = new OpenAPIBackend({
    ...options,
    strict: true,
    handlers: {
      notFound: (_context, response, { json, status }) => {
        return response(status(404), json({ err: 'Not found', status: 404 }))
      },
      validationFail: ({ validation }, response, { json, status }) => {
        return response(status(400), json({ err: validation.errors, status: 400 }))
      },
      notImplemented: ({ api, operation }, response, { json, status }) => {
        const _response = api.mockResponseForOperation(operation.operationId!)

        return response(status(_response.status), json(_response.mock))
      },
    },
  })

  await api.init()

  return rest.all(pathRE, async ({ bodyUsed, headers, json, method, url }, res, ctx) => {
    const request = {
      body: bodyUsed ? await json() : null,
      headers: { ...headers.raw },
      method,
      path: url.pathname,
      query: url.search,
    }

    return api.handleRequest(request, res, ctx)
  })
}
