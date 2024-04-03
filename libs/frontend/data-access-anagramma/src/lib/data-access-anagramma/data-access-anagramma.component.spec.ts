import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccessAnagrammaComponent } from './data-access-anagramma.component';

describe('DataAccessAnagrammaComponent', () => {
  let component: DataAccessAnagrammaComponent;
  let fixture: ComponentFixture<DataAccessAnagrammaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessAnagrammaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccessAnagrammaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
