import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective {
  @Input() src: string;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.lazyLoadImage();
  }

  private canLazyLoad() {
    return window && 'IntersactionObserver' in window;
  }

  private lazyLoadImage() {
    let obs = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          // this.loadImage();
          this.el.nativeElement.src = this.src;
          const image = new Image();
          image.onload = () => {
            this.el.nativeElement.classList.remove('lazy');
            obs.unobserve(this.el.nativeElement);
          };
          image.src = this.src;

        }
      });
     /* entries.forEach(({ intersectionRatio }) => {
        if (intersectionRatio > 0) {
          this.loadImage();
          obs.unobserve(this.el.nativeElement);
        }
      });*/
    });
    obs.observe(this.el.nativeElement);
  }

  private loadImage() {
    console.log(this.el.nativeElement.src);
    this.el.nativeElement.src = this.src;
    const image = new Image();
    image.onload = () => {
      this.el.nativeElement.classList.remove('lazy');
    };
    image.src = this.src;
  }

}
