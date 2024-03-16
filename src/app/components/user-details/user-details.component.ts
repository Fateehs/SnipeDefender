import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  userId: number;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.userId = +params['id']; // URL'den 'id' parametresini al
      this.fetchUserDetails(this.userId); // Kullanıcı detaylarını getiren fonksiyonu çağır
    });
  }

  fetchUserDetails(userId: number) {
    // HttpClient ile backend'e istek gönder
    this.http.get<any>('http://localhost:your-backend-port/userdetails/' + userId).subscribe(data => {
      console.log(data); // Gelen veriyi konsola yazdır veya işle
    });
  }
}
