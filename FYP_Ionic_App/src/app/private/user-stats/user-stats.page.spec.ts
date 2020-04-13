import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserStatsPage } from './user-stats.page';

describe('UserStatsPage', () => {
  let component: UserStatsPage;
  let fixture: ComponentFixture<UserStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
