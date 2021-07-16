const fetch = require('node-fetch');
const URL = 'https://api.github.com/orgs/tryber/repos';

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Testing getRepos', () => {
  it('should contain the repos of the projects `todo-list` and `meme-generator`', async () => {
    const reposArray = await getRepos(URL);
    const containRepos = reposArray.includes('sd-01-week4-5-project-todo-list')
      && reposArray.includes('sd-01-week4-5-project-meme-generator');
    expect(containRepos).toBeTruthy();
  });
});
