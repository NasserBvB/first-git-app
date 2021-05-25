import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaDirectiveComponent } from './ma-directive.component';

describe('MaDirectiveComponent', () => {
  let component: MaDirectiveComponent;
  let fixture: ComponentFixture<MaDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
