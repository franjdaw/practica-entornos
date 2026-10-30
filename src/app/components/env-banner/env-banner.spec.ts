import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnvBanner } from './env-banner';

describe('EnvBanner', () => {
  let component: EnvBanner;
  let fixture: ComponentFixture<EnvBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvBanner],
    }).compileComponents();

    fixture = TestBed.createComponent(EnvBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
