import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrcodePage } from './qrcode.page';

describe('QrcodePage', () => {
  let component: QrcodePage;
  let fixture: ComponentFixture<QrcodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
