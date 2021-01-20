import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioListPage } from './usuario-list.page';

describe('UsuarioListPage', () => {
  let component: UsuarioListPage;
  let fixture: ComponentFixture<UsuarioListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioListPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
