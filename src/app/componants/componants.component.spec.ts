import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponantsComponent } from './componants.component';

describe('ComponantsComponent', () => {
  let component: ComponantsComponent;
  let fixture: ComponentFixture<ComponantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
