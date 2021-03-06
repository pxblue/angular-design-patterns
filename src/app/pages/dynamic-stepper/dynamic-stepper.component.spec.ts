import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicStepperComponent } from './dynamic-stepper.component';
import { DynamicStepperModule } from './dynamic-stepper.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DynamicStepperComponent', () => {
    let component: DynamicStepperComponent;
    let fixture: ComponentFixture<DynamicStepperComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            imports: [DynamicStepperModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicStepperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });

    it('should add item', async(() => {
        fixture.detectChanges();
        component.steps = [{ title: 'item1', value: null, completed: false }];
        component.addItem();
        void expect(component.steps.length).toEqual(2);
    }));

    it('should check completed', async(() => {
        fixture.detectChanges();
        component.steps = [
            { title: null, value: null, completed: true },
            { title: null, value: null, completed: true },
        ];
        component.checkCompleted();
        void expect(component.allCompleted).toBeTruthy();
    }));

    it('should handle done', async(() => {
        fixture.detectChanges();
        component.handleDone();
        void expect(component.procedureFinished).toBeTruthy();
    }));

    it('should handle reset', async(() => {
        fixture.detectChanges();
        component.handleReset();
        void expect(component.procedureFinished).toBeFalsy();
        void expect(component.allCompleted).toBeFalsy();
        void expect(component.steps.length).toEqual(1);
    }));

    it('should handle delete all', async(() => {
        fixture.detectChanges();
        const deleteAllButton = fixture.debugElement.query(By.css('[data-cy="delete-all"]'));
        const removeAllSpy = spyOn(component, 'onRemoveAll').and.stub();
        deleteAllButton.triggerEventHandler('click', undefined);
        fixture.detectChanges();
        void expect(removeAllSpy).toHaveBeenCalledTimes(1);
    }));

    it('should handle delete step', async(() => {
        fixture.detectChanges();
        void expect(component.steps.length).toEqual(1);
        const deleteStepButton = fixture.debugElement.query(By.css('[data-cy="delete-step"]'));
        deleteStepButton.triggerEventHandler('click', undefined);
        void expect(component.steps.length).toEqual(0);
    }));
});
