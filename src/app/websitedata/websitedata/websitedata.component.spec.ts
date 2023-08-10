import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitedataComponent } from './websitedata.component';

describe('WebsitedataComponent', () => {
  let component: WebsitedataComponent;
  let fixture: ComponentFixture<WebsitedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsitedataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsitedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
