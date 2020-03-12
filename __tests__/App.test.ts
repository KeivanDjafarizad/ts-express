import App from '../src/App';

describe('test App', () => {
  it('Should initialize the express property', () => {
    const app = new App();
    expect(app.express).toBeDefined();
  });
});
