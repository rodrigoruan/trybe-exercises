const getRepos = require('./ex4');

describe('test if repo has links', () => {
  it('verify if includes meme-generator and todo-list', async () => {
    expect.hasAssertions();
    const list = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(list).toContain('sd-01-week4-5-project-todo-list');
    expect(list).toContain('sd-01-week4-5-project-meme-generator');
  });
});
