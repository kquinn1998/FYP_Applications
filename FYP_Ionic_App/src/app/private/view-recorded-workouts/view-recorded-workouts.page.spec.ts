import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewRecordedWorkoutsPage } from './view-recorded-workouts.page';

describe('ViewRecordedWorkoutsPage', () => {
  let component: ViewRecordedWorkoutsPage;
  let fixture: ComponentFixture<ViewRecordedWorkoutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecordedWorkoutsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRecordedWorkoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
