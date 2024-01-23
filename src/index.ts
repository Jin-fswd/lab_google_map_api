import { CustomizedMap } from "./CustomizedMap";
import { Student } from "./Student";
import { Internship } from "./Internship";

function initMap(): void {
  // new google.maps.Map(document.getElementById("map")!, {
  //   zoom: 1,
  //   center: {
  //     lat: 0,
  //     lng: 0,
  //   },
  // });
  const element = document.getElementById("map");
  const map = new CustomizedMap(element!);

  const student = new Student("", "", { lat: 0, lon: 0 });
  const internship = new Internship((""),{ lat: 0, lon: 0 });
  
  map.addStudentMarker(student.makeNewStudent());
  map.addInternshipMarker(internship.makeNewInternship());
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
