import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { SkillsPanelComponent } from './skills-panel.component';
import { AboutmeService } from '../../services/aboutme.service';
import { of } from 'rxjs/';

describe('SkillsPanelComponent', () => {
  let component: SkillsPanelComponent;
  let fixture: ComponentFixture<SkillsPanelComponent>;
  let aboutmeService: AboutmeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsPanelComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: AboutmeService, useClass: MockAboutmeService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsPanelComponent);
    component = fixture.componentInstance;
    aboutmeService = TestBed.inject(AboutmeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockAboutmeService {
  getAboutme() {
    return of({ skills: ['testing Angular']});
  }
}
