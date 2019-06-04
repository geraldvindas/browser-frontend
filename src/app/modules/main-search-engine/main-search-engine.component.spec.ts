import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchEngineComponent } from './main-search-engine.component';

describe('MainSearchEngineComponent', () => {
  let component: MainSearchEngineComponent;
  let fixture: ComponentFixture<MainSearchEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSearchEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSearchEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
