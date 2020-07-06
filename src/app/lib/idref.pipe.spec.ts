import { IdRefPipe } from './idref.pipe';

describe('IdRefPipe', () => {
  it('create an instance', () => {
    const pipe = new IdRefPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return a value with # at the begining', () => {
    const pipe = new IdRefPipe();
    expect(pipe.transform('contact')).toEqual('#contact');
    expect(pipe.transform('projects-panel')).toEqual('#projects-panel');
  });
});
