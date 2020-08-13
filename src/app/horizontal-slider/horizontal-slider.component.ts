import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-horizontal-slider',
  templateUrl: './horizontal-slider.component.html',
  styleUrls: ['./horizontal-slider.component.scss']
})
export class HorizontalSliderComponent implements OnInit, AfterViewInit {
  transform;

  posters = [
    {
      title: 'Sorry To Bother You',
      subtitle: '1998',
      poster: 'https://ib.hulu.com/user/v3/artwork/c66b772e-75e9-43b1-bcb7-e09ce9e8582d?base_image=52250720-fe06-46d4-84b1-cec7b289ac9e&base_image_bucket_name=hummus&size=400x600&format=jpeg'
    },
    {
      title: 'Support The Girls',
      subtitle: '',
      poster: 'https://ib.hulu.com/user/v3/artwork/4d5ae6ed-09bb-4532-83b3-cc0c8957325a?base_image=327c1abc-8c82-433c-ad33-3ae1132c73ac&base_image_bucket_name=hummus&size=400x600&format=jpeg'
    },
    {
      title: 'Teaching Mrs. Tingle',
      subtitle: '1996',
      poster: 'https://ib1.hulu.com/user/v3/artwork/31f65935-7f11-46ed-b68b-3fc0b28ae727?base_image=77c3d9bc-67b9-4085-b54e-e96242d0f81b&base_image_bucket_name=hummus&size=400x600&format=jpeg'
    },
    {
      title: 'Patch Adams',
      subtitle: '',
      poster: 'https://ib3.hulu.com/user/v3/artwork/206b29ed-9fa6-4e91-b9a8-8c20216af7c6?base_image=e1672b17-4041-4e07-aba2-ff72cc5ac7fd&base_image_bucket_name=hummus&size=400x600&format=jpeg'
    },
    {
      title: 'Waiting',
      subtitle: '',
      poster: 'https://ib3.hulu.com/user/v3/artwork/01a53220-9c35-481c-a444-290eb5ffe378?base_image=7de5a8df-4e4f-4602-9991-9fca5dd65b3c&base_image_bucket_name=hummus&size=400x600&format=jpeg'
    },
    {
      title: 'Liar Liar',
      subtitle: '',
      poster: 'https://ib2.hulu.com/user/v3/artwork/65cfdab4-42f3-4482-a4b0-ce5953454a07?base_image=e3a8f7be-2cfc-43dd-b255-157b5539b5e9&base_image_bucket_name=hummus&size=400x600&format=jpeg'
    },
    {
      title: 'The Nutty Professor',
      subtitle: '2014',
      poster: 'https://ib.hulu.com/user/v3/artwork/f23418bc-5dec-420f-ba16-7f9a7e6eddee?base_image=dddf018a-3bc3-4089-8e64-ac423c9957f6&base_image_bucket_name=hummus&size=400x600&format=jpeg'
    },
    {
      title: 'He Got Game',
      subtitle: '',
      poster: 'https://ib4.hulu.com/user/v3/artwork/b1c54ae4-54da-419a-a1f8-6607d851e18b?base_image=1c6d1fd5-bc21-4332-987f-b80245f10d23&base_image_bucket_name=hummus&size=400x600&format=jpeg'
    },
    {
      title: 'The Naked Gun: From the Files of Police Squad!\n',
      subtitle: '',
      poster: 'https://ib.hulu.com/user/v3/artwork/84b1fbe5-0956-4107-8510-9da3d0258f94?base_image=336c688a-1ec0-4572-ac6b-c9f3c70e2321&base_image_bucket_name=hummus&size=400x600&format=jpeg'
    },
    {
      title: 'The Wall of Street',
      subtitle: '',
      poster: 'https://wwwimage-secure.cbsstatic.com/thumbnails/photos/w370/show_asset/25/05/88/show_asset_c1e87390-a432-409b-9f36-585dbfcce22a.jpg'
    }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
/*    const myImgs = document.querySelectorAll('.lazy');

    let observer = new IntersectionObserver(entries => {
      entries.forEach((entry: any) => {
        if (entry.intersectionRatio > 0) {
          // console.log('in the view');
          entry.target.src = entry.target.dataset.src;

          const image = new Image();
          image.onload = () => {
            entry.target.classList.remove('lazy');
            observer.unobserve(entry.target);
          };
          image.src = entry.target.dataset.src;

        } else {
          // console.log('out of view');
        }
      });
    });

    myImgs.forEach(image => {
      observer.observe(image);
    });*/
  }

  forward() {
    this.transform = this.sanitizer.bypassSecurityTrustStyle(`translateX(-1624px)`);
  }

  back() {
    this.transform = this.sanitizer.bypassSecurityTrustStyle(`translateX(0)`);
  }

  loaded() {
    // console.log('loaded end.')
  }
}
