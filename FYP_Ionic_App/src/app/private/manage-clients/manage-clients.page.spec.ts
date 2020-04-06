import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageClientsPage } from './manage-clients.page';

describe('ManageClientsPage', () => {
  let component: ManageClientsPage;
  let fixture: ComponentFixture<ManageClientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClientsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
