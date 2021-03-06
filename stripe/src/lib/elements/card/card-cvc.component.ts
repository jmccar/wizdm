import { StripeElementsDirective, StripeElementDirective, STRIPE_ELEMENTS_OPTIONS } from '@wizdm/stripe/elements';
import { Component, Inject, Optional, forwardRef, Input, ElementRef } from '@angular/core';
import type { StripeElementsOptions, StripeCardCvcElementOptions } from '@stripe/stripe-js';

/** Stripe Card CVC Element for Angular */
@Component({
  selector: 'wm-stripe-card-cvc',
  template: '',
  providers: [
    { provide: StripeElementDirective, useExisting: forwardRef(() => StripeCardCvc) }
  ]
})
export class StripeCardCvc extends StripeElementDirective<'cardCvc'> {

  constructor(@Optional() elements: StripeElementsDirective, @Optional() @Inject(STRIPE_ELEMENTS_OPTIONS) config: StripeElementsOptions, ref: ElementRef<HTMLElement>) {
    super('cardCvc', elements, config, ref);
  }

  /** CardCvc specific options */
  protected get options(): StripeCardCvcElementOptions {
    return { 
     placeholder: this.placeholder
    };
  };
  
  /** A placeholder text */
  @Input() placeholder: string;
}