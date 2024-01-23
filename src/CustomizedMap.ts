import { Student } from "./Student";
import { Internship } from "./Internship";

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
  private addMarker(position: google.maps.LatLng, title: string): void {
    const marker = new google.maps.Marker({
      position: position,
      map: this.map,
      title: title,
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
    this.addMarker(new google.maps.LatLng(student.location.lat, student.location.lon), `student : ${student.fullName}`);
  }

  addInternshipMarker(internship: Internship): void {
    this.addMarker(new google.maps.LatLng(internship.location.lat, internship.location.lon),`Welcome to ${internship.businessName}s Internship!`);
  }
}