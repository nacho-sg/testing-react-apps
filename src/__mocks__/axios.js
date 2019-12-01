const mockAxios = jest.genMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);

export const httpMockSuccess = (type, response) => {
  return mockAxios[type].mockImplementationOnce(() =>
    Promise.resolve(response)
  );
};

export const httpMockFail = (type, response) => {
  return mockAxios[type].mockImplementationOnce(() => Promise.reject(response));
};

export default mockAxios;
