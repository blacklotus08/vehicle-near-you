import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'app-lazy-loaded-image',
  templateUrl: './lazy-loaded-image.component.html',
  styleUrls: ['./lazy-loaded-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyLoadedImageComponent implements OnInit {
  @Input() ImageSource: string;
  @Input() FallBackImageSource: string;

  @ViewChild('lazyImage',{static: false}) image;
  @ViewChild('lazyImageWrapper',{static: false}) wrapper;

  minimumHeight: number = null;

  constructor(
      private cd: ChangeDetectorRef
  ) {}

  ngOnInit() { }

  loadFallbackImage(event) {
      event.srcElement.src = this.FallBackImageSource;
  }

  onloadImage (event) {
      this.wrapper.nativeElement.classList.remove('loading');
      this.wrapper.nativeElement.setAttribute('style', 'background-image: url(' + event.srcElement.src + ')');
      this.cd.detectChanges();
  }

}
