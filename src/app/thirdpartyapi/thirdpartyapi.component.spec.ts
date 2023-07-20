import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpartyapiComponent } from './thirdpartyapi.component';

describe('ThirdpartyapiComponent', () => {
  let component: ThirdpartyapiComponent;
  let fixture: ComponentFixture<ThirdpartyapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThirdpartyapiComponent]
    });
    fixture = TestBed.createComponent(ThirdpartyapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
