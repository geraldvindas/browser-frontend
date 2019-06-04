import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySearcherComponent } from './secondary-searcher.component';

describe('SecondarySearcherComponent', () => {
  let component: SecondarySearcherComponent;
  let fixture: ComponentFixture<SecondarySearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondarySearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
