import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewRecordedWorkoutDetailsPage } from './view-recorded-workout-details.page';

describe('ViewRecordedWorkoutDetailsPage', () => {
  let component: ViewRecordedWorkoutDetailsPage;
  let fixture: ComponentFixture<ViewRecordedWorkoutDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecordedWorkoutDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRecordedWorkoutDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
