const getRepos = require('./ex4');

test('test if repo has todo-list', async () => {
  expect.hasAssertions();
  const list = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(list).toContain('sd-01-week4-5-project-todo-list');
});

test('test if repo has meme-generator', async () => {
  expect.hasAssertions();
  const list = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect(list).toContain('sd-01-week4-5-project-meme-generator');
});
