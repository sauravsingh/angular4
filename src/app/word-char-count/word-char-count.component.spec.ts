import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCharCountComponent } from './word-char-count.component';

describe('WordCharCountComponent', () => {
  let component: WordCharCountComponent;
  let fixture: ComponentFixture<WordCharCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCharCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCharCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
