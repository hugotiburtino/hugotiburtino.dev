import { TestBed } from '@angular/core/testing';

import { AboutmeService } from './aboutme.service';
import { Aboutme } from '../lib/aboutme';
import { SkillCategory } from '../lib/skill-category.enum';
import { defer } from 'rxjs';

describe('AboutmeService', () => {
  let service: AboutmeService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AboutmeService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected about me info (HttpClient called once)', () => {
     const expectedAboutme: Aboutme = { 
       completeName: "Developer", 
       city: "Devland",
       elevatorPitch: "I'm good",
       status: "Being modest",
       skills: [
          {
            subject: "Development", 
            categories: [SkillCategory.BestPractices] 
          }
        ]
      }
    httpClientSpy.get.and.returnValue(asyncData(expectedAboutme));

    service.getAboutme().subscribe(
      data => expect(data.completeName).toEqual("Developer"),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  // it('should return an error when the server returns a 404', () => {
  //   const errorResponse = new HttpErrorResponse({
  //     error: 'test 404 error',
  //     status: 404, statusText: 'Not Found'
  //   });

  //   httpClientSpy.get.and.returnValue(asyncError(errorResponse));

  //   heroService.getHeroes().subscribe(
  //     heroes => fail('expected an error, not heroes'),
  //     error  => expect(error.message).toContain('test 404 error')
  //   );
  //  });
});
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}