import { Project } from './project.class';

describe('Project', () => {
  it('should create an instance', () => {
    expect(new Project('TestProject')).toBeTruthy();
  });
});
