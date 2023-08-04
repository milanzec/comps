import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectionsHomeComponent } from './colections-home.component';

describe('ColectionsHomeComponent', () => {
  let component: ColectionsHomeComponent;
  let fixture: ComponentFixture<ColectionsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColectionsHomeComponent]
    });
    fixture = TestBed.createComponent(ColectionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
