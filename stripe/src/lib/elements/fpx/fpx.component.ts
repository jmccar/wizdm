import { StripeElementsDirective, StripeElementDirective, STRIPE_ELEMENTS_OPTIONS } from '@wizdm/stripe/elements';
import { Component, Inject, Optional, forwardRef, Input, ElementRef } from '@angular/core';
import type { StripeElementsOptions, StripeFpxBankElementOptions } from '@stripe/stripe-js';

/** Stripe fpxBank Element 
 * @see https://stripe.com/docs/payments/fpx
 */
@Component({
  selector: 'wm-stripe-fpx-bank',
  template: '',
  providers: [
    { provide: StripeElementDirective, useExisting: forwardRef(() => StripeFpxBank) }
  ]
})
export class StripeFpxBank extends StripeElementDirective<'fpxBank'> {

  constructor(@Optional() elements: StripeElementsDirective, @Optional() @Inject(STRIPE_ELEMENTS_OPTIONS) config: StripeElementsOptions, ref: ElementRef<HTMLElement>) {
    super('fpxBank', elements, config, ref);
  }

  protected get options(): StripeFpxBankElementOptions {
    return { 
      accountHolderType: this.accountHolderType,
      value: this.fpxValue
    };
  }

  /** Account Holder Type */
  @Input() accountHolderType: StripeFpxBankElementOptions['accountHolderType'];
  
  /**
   * A pre-filled value for the Element. Can be one of the banks listed in the
   * @see https://stripe.com/docs/payments/fpx/accept-a-payment#bank-reference
   * @example 'affin_bank'
   */
  @Input('value') fpxValue: string;
}