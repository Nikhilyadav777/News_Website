import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsNewsComponent } from './politics-news.component';

describe('PoliticsNewsComponent', () => {
  let component: PoliticsNewsComponent;
  let fixture: ComponentFixture<PoliticsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticsNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
