import { GaEventDirective } from './ga-event.directive';
import { TestBed } from '@angular/core/testing';
import { NgxGoogleAnalyticsModule } from '../ngx-google-analytics.module';

describe('GaEventDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxGoogleAnalyticsModule
      ]
    }).compileComponents();
  });

  it('should create an instance', () => {
    const directive = TestBed.get(GaEventDirective);
    expect(directive).toBeTruthy();
  });
});
