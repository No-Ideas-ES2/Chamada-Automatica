import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioUpdatePage } from './usuario-edit.page';

describe('UsuarioCreatePage', () => {
  let component: UsuarioUpdatePage;
  let fixture: ComponentFixture<UsuarioUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioUpdatePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
