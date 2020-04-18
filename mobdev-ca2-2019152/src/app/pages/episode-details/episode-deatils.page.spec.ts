import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EpisodeDeatilsPage } from './episode-deatils.page';

describe('EpisodeDeatilsPage', () => {
  let component: EpisodeDeatilsPage;
  let fixture: ComponentFixture<EpisodeDeatilsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeDeatilsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EpisodeDeatilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
