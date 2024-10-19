import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [ReactiveFormsModule], // Import du module de formulaire réactif
      providers: [FormBuilder] // Fournir FormBuilder
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy(); // Vérifie que le composant est créé
  });

  it('should initialize the form with empty values', () => {
    const form = component.form;
    expect(form).toBeDefined(); // Vérifie que le formulaire est initialisé
    expect(form.value).toEqual({
      name: null,
      email: null,
      message: null
    }); // Vérifie que les valeurs du formulaire sont nulles au départ
  });
});
