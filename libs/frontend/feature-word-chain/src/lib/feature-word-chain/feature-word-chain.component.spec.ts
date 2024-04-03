import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureWordChainComponent } from './feature-word-chain.component';

describe('FeatureWordChainComponent', () => {
  let component: FeatureWordChainComponent;
  let fixture: ComponentFixture<FeatureWordChainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureWordChainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureWordChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
