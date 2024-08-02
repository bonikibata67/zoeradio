import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  images: string[] = [
    'https://zoetv.co.ke/wp-content/uploads/2022/05/website_image_3.jpg',
    'https://zoetv.co.ke/wp-content/uploads/2022/08/kid-banner-2.jpg',
    'https://zoetv.co.ke/wp-content/uploads/2022/08/website-partne-banner-.jpg'
  ];
  
  currentImage: number = 0;
  intervalTime: number = 3000; // Time in milliseconds for image switch

  ngOnInit(): void {
    this.startImageSlider();
  }

  startImageSlider(): void {
    setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    }, this.intervalTime);
  }
}
// export class HomeComponent {

// }
