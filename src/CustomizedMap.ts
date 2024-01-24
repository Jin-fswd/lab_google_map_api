import { Student } from "./Student";
import { Internship } from "./Internship";
//const path = require('path');

export class CustomizedMap {
  private map: google.maps.Map;
  private markers: google.maps.Marker[] = [];

  constructor(mapElement: HTMLElement) {
    this.map = new google.maps.Map(mapElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  private addMarker(position: google.maps.LatLng, title: string, image?: string): void {
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      title: title,
      icon : image,
    });

    const infoWindow = new google.maps.InfoWindow({
        content: title,
    });

    marker.addListener("click", () => {
        infoWindow.open(this.map, marker);
    });

    this.markers.push(marker);
  }
  addStudentMarker(student: Student): void {
    //E:\workspace\COMP2523\mapprac\mapprac\src\icon
    //src\CustomizedMap.ts
    const image =
    "https://blogfiles.pstatic.net/20140911_29/hyl0011_1410408338229eKeBf_GIF/mini_157.gif";
    console.log(image);
    this.addMarker(new google.maps.LatLng(student.location.lat, student.location.lon), `student : ${student.fullName}`, image);
  }

  addInternshipMarker(internship: Internship): void {
    this.addMarker(new google.maps.LatLng(internship.location.lat, internship.location.lon),`Welcome to ${internship.businessName}s Internship!`);
  }
}