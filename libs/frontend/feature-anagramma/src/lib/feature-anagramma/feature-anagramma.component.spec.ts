import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureAnagrammaComponent } from './feature-anagramma.component';

describe('FeatureAnagrammaComponent', () => {
  let component: FeatureAnagrammaComponent;
  let fixture: ComponentFixture<FeatureAnagrammaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureAnagrammaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureAnagrammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
