import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  foods = [{ name: 'PAID' }, { name: 'BILLED' }, { name: 'FOC' }];
  transport = [
    { place: 'SURFACE' },
    { place: 'RAIL' },
    { place: 'AIR' },
    { place: 'SPECIAL CASE' },
  ];
  consigner = [
    { name: 'Name' },
    { name: 'GST No.' },
    { name: 'Mobile No.' },
    { name: 'City' },
    { name: 'State' },
    { name: 'Pincode' },
  ];

  freight = [
    { name: 'Freight charges(Rs)' },
    { name: 'Bilty Charge' },
    { name: 'KM Charge' },
    { name: 'Extra Km Ch.' },
    { name: 'Floor Charge' },
    { name: 'Loading Charge' },
    { name: 'UnLoading Charge' },
    { name: 'S. Charge' },
    { name: 'Kanta Charge' },
    { name: 'Holding Charge' },
    { name: 'COD Charge' },
    { name: 'Fuel Charge' },
    { name: 'Insurance Charge' },
    { name: 'COVID19 Charge' },
    { name: 'DD Charge' },
    { name: 'P.F.' },
    { name: 'Brokerage' },
    { name: 'Toll Charge' },
    { name: 'Other Charge' },
    { name: 'Green Tax' },
    { name: 'Detention Charge' },
    { name: 'Total' },
    { name: 'Less Advance' },
    { name: 'Total Freight Charge' },
  ];

  others = [
    { name: 'EWB NO' },
    { name: 'GST BY' },
    { name: 'Shipment No' },
    { name: 'Driver Exp' },
    { name: 'Diesel Exp' },
    { name: 'Vehicle Exp' },
    { name: 'Movement Type' },
    { name: 'Distance(In Km)' },
    { name: 'Expected Delivery Date' },
    { name: 'Floor Type' },
    { name: 'Remark' },
  ];
}
