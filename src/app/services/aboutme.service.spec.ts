import { TestBed } from '@angular/core/testing';

import { AboutmeService } from './aboutme.service';

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
  //   const expectedHeroes: Hero[] =
  //     [{ id: 1, name: 'A' }, { id: 2, name: 'B' }];

  //   httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

  //   heroService.getHeroes().subscribe(
  //     heroes => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
  //     fail
  //   );
  //   expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  // });

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
   });
});
