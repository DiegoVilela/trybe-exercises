const URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return fetch(URL, { headers: { Accept: "application/json" } })
    .then(response => response.json())
    .then(data => data.joke);
};

const fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: "7h3oGtrOfxc",
        joke: "Whiteboards ... are remarkable.",
        status: 200
      })
  })
);

describe('Mocking the built-in function fetch', () => {
  it('should return a joke', () => {
    expect(fetchJoke()).resolves.toBe('Whiteboards ... are remarkable.');
  });
});
