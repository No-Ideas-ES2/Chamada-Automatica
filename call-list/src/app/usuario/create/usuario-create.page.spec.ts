import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioCreatePage } from './usuario-create.page';

describe('UsuarioCreatePage', () => {
  let component: UsuarioCreatePage;
  let fixture: ComponentFixture<UsuarioCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioCreatePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
