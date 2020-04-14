import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageClientDashboardPage } from './manage-client-dashboard.page';

describe('ManageClientDashboardPage', () => {
  let component: ManageClientDashboardPage;
  let fixture: ComponentFixture<ManageClientDashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClientDashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageClientDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
