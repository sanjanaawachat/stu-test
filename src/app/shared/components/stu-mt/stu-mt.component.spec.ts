import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuMtComponent } from './stu-mt.component';

describe('StuMtComponent', () => {
  let component: StuMtComponent;
  let fixture: ComponentFixture<StuMtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuMtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuMtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
