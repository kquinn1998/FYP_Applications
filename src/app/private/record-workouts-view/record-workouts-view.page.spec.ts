import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordWorkoutsViewPage } from './record-workouts-view.page';

describe('RecordWorkoutsViewPage', () => {
  let component: RecordWorkoutsViewPage;
  let fixture: ComponentFixture<RecordWorkoutsViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordWorkoutsViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordWorkoutsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
