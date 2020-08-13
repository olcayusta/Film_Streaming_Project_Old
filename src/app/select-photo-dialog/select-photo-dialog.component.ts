import {ChangeDetectionStrategy, Component, NgZone, OnInit, Renderer2, ViewChild, ViewEncapsulation} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-select-photo-dialog',
  templateUrl: './select-photo-dialog.component.html',
  styleUrls: ['./select-photo-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectPhotoDialogComponent implements OnInit {
  file;
  sanitizingFile;

  ratio;
  calcHeight;
  backgroundPositionAxisX;
  backgroundPositionAxisY;

  @ViewChild('photoWrapper', {static: true}) photoWrapper: HTMLDivElement;

  settings;

  isDown = false;

  mouseMove: Function;
  // mouseDown: Function;
  // mouseUp: Function;

  startX;
  startY;

  positionX;
  positionY;
  dragElement = null;
  moveFunc: Function;

  defaultSizeX;
  defaultSizeY;

  constructor(
    private domSanitizer: DomSanitizer,
    private zone: NgZone,
    private renderer: Renderer2
  ) { }

  mouseUp(event: MouseEvent) {
    if (this.dragElement != null) {
      this.moveFunc();
      // this.moveFunc();
      // we're done with these events until the next OnMouseDown
      document.onmousemove = null;
      // document.onselectstart = null;
      this.dragElement = null;
    }
  }

  mouseDown(event: MouseEvent) {
    this.startX = event.clientX;
    this.startY = event.clientY;
    this.isDown = true;
    console.log('Downed!');
    this.positionX = parseInt(document.getElementById('drag').style.backgroundPositionX, 10);
    this.positionY = parseInt(document.getElementById('drag').style.backgroundPositionY, 10);
    this.dragElement = event.target;
    this.moveFunc = this.renderer.listen('document', 'mousemove', (e) => {
      const pos_x = (this.positionX + e.clientX - this.startX);
      const pos_y = (this.positionY + e.clientY - this.startY);

      const dragEl = document.getElementById('drag');
      // dragEl.style.backgroundPositionY = pos_y + 'px';
      this.backgroundPositionAxisX = pos_x;
      this.backgroundPositionAxisY = pos_y;

      if (pos_x >= 0) {
        this.backgroundPositionAxisX = 0;
      }

      if (pos_x <= this.defaultSizeX) {
        this.backgroundPositionAxisX = this.defaultSizeX;
      }

      if (pos_y >= 0) {
        this.backgroundPositionAxisY = 0;
        // dragEl.style.backgroundPositionY = '0px';
      }

      if (pos_y <= this.defaultSizeY) {
        this.backgroundPositionAxisY = this.defaultSizeY;
        // dragEl.style.backgroundPositionY = `${this.defaultSizeY}px`;
      }

    });
  }

  mousemove(event: MouseEvent) {
    if (this.isDown) {

      // console.log(event.clientY - 246);
      // this.backgroundPositionAxisY = -(event.clientY - 246);
      /*
            const client = (event.clientY - 246) / 2;

            const result = (event.clientY - 246) - this.startY;

            const result2 = -(result / 2);
            console.log(result2);

           this.backgroundPositionAxisY = -(this.backgroundPositionAxisY + result2);*/

      // console.log(this.backgroundPositionAxisY);

      // this.backgroundPositionAxisY = this.backgroundPositionAxisY + -(event.clientY - 246);

      /*      if (event.clientY - 246 > 250) {
              console.log('STOPPED!');
            } else {

            }*/
    }
  }

  ngOnInit() {

    this.renderer.listen('document', 'mouseup', (event) => {
  /*    console.log('Upped!');
      if (this.dragElement) {
        this.moveFunc();
      }*/
    });

    this.zone.runOutsideAngular(() => {
      /*   this.mouseMove = this.renderer.listen('document', 'mousemove', (event) => {
           if (this.isDown) {
             console.log(event.clientY - 246);
             this.backgroundPositionAxisY = -(event.clientY - 246);
           }
         });
         this.renderer.listen('document', 'mousedown', (event) => {
           this.isDown = true;
         });
         this.renderer.listen('document', 'mouseup', (event) => {
           this.isDown = false;
           // this.mouseMove();
         });*/
    });
  }

  getFiles(event) {
    this.file = event.target.files[0];
    const objectURL = URL.createObjectURL(this.file);
    this.sanitizingFile = this.domSanitizer.bypassSecurityTrustStyle(`url(${objectURL})`);
    const image: HTMLImageElement = new Image();
    image.src = objectURL;
    console.log(image);
    image.onload = () => {
      this.ratio = image.naturalHeight / image.naturalWidth;
      this.calcHeight = this.ratio * 500;
      // this.backgroundPositionAxisY = -1 * (this.calcHeight - 500) / 2;

      if (image.height > image.width) {
        const ratio = image.height / image.width;
        const size_y = ratio * 500;
        this.defaultSizeY = -1 * (size_y - 500);
        const pos_y = -1 * (size_y - 500) / 2;
        this.backgroundPositionAxisY = pos_y;
      } else {
        const ratio = image.width / image.height
        const size_x = ratio * 500;
        this.defaultSizeX = -1 * (size_x - 500);
        const pos_x = -1 * (size_x - 500) / 2;
        this.backgroundPositionAxisX = pos_x;
      }

      // const top = this.photoWrapper.nativeElement.getBoundingClientRect().top;
      // alert(top);
    };

    // this.sanitizingFile = this.domSanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
