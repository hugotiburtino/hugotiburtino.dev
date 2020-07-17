import { PersonalProject } from './personal-project';

describe('Project', () => {
  it('should create an instance', () => {
    expect(new PersonalProject('TestProject')).toBeTruthy();
  });
});
