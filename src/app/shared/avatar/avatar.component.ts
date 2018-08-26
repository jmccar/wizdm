import { Component, Input } from '@angular/core';
import { $animations } from './avatar.animations';

@Component({
  selector: 'wm-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  animations: $animations
})
export class AvatarComponent {

  public load = false;

  constructor() { }

  @Input() src: string;
  @Input() alt: string;

  // Avatar color customization
  @Input() color: string;
}