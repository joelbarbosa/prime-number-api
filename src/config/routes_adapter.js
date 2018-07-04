const RoutesAdapter = (request, response) => {
  const req = request;
  const res = response;

  /**
   * objectJson
   * oprions {HTTP_STATUS_CODE: ?}
   * @param {*} objectJson
   * @param {*}
   */
  const asyncResponse = (data = { status: 'success' }, options = { HTTP_STATUS_CODE: 200 }) => {
    return new Promise(() => {
      return res.status(options.HTTP_STATUS_CODE).json(data);
    }).catch(err => {
      return res.errorResponse(500, 'internal error');
    });
  }

  const errorResponse = (status = 500, message = 'error') => {
    return res.status(status).json({ status: message });
  }

  return {
    asyncResponse: asyncResponse,
    errorResponse: errorResponse
  }
}

export default RoutesAdapter;
