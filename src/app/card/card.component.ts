import { Component, OnInit } from '@angular/core';
// For input
import { Input } from '@angular/core';
// Get interface definition
import { Specs } from '../type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor() {}

  // Pass the variable to it
  @Input() title: string;

  // Set boolean to verify which node status
  // Use ES6 function include to check or use  Good old’ .indexOf():
  // ES6 .includes():  OR Good old’ .indexOf():
  mastercon: boolean;
  proxycon: boolean;
  mgmtcon: boolean;
  workercon: boolean;
  storagecon: boolean;

  // Can choose where to deploy
  cloudspecs: Specs[] = [
    { value: 'alibabacloud', viewValue: 'alibabacloud' },
    { value: 'ibmcloud', viewValue: 'ibmcloud' },
    { value: 'awscloud', viewValue: 'awscloud' }
  ];

  // Spec can choose
  // Only Master can choose image, ha or non-ha #if choose HA , then can choose 3,5,7 number
  // Other node can choose memory, CPU,
  // Only Worker node can choose quantity
  // Only Storage Node like glusterfs Node can choose Disk_Size and Disk format, like SSD or HDD

  // Master Specs
  // Images
  masterspecsImages: Specs[] = [
    { value: 'ubuntu-latest', viewValue: 'Ubuntu-latest' },
    { value: 'centos-latest', viewValue: 'CentOS-latest' },
    { value: 'redhat-latest', viewValue: 'Red Hat-latest' }
  ];
  // HA or Non HA
  masterspecsHA: Specs[] = [
    { value: 'ha', viewValue: 'High Availbility' },
    { value: 'non-ha', viewValue: 'Non High Availbility' }
  ];
  // Quantity
  masterspecsQuantity: Specs[] = [
    { value: '3', viewValue: '3' },
    { value: '5', viewValue: '5' },
    { value: '7', viewValue: '7' }
  ];
  // CPU and Memory
  masterspecsMemoryCPU: Specs[] = [
    { value: '2_8', viewValue: '2 CPU, 8 GB Memory' },
    { value: '4_16', viewValue: '4 CPU, 16 GB Memory' },
    { value: '8_32', viewValue: '8 CPU, 32 GB Memory' },
    { value: '16_48', viewValue: '16 CPU, 48 GB Memory' },
    { value: '32_128', viewValue: '32 CPU, 128 GB Memory' },
    { value: '64_256', viewValue: '64 CPU, 256 GB Memory' }
  ];

  // Other Node, mgmt node, proxy node
  // Proxy
  // CPU and Memory
  proxyspecsMemoryCPU: Specs[] = [
    { value: '2_8', viewValue: '2 CPU, 8 GB Memory' },
    { value: '4_16', viewValue: '4 CPU, 16 GB Memory' },
    { value: '8_32', viewValue: '8 CPU, 32 GB Memory' },
    { value: '16_48', viewValue: '16 CPU, 48 GB Memory' },
    { value: '32_128', viewValue: '32 CPU, 128 GB Memory' },
    { value: '64_256', viewValue: '64 CPU, 256 GB Memory' }
  ];

  // Mgmt
  // CPU and Memory
  mgmtspecsMemoryCPU: Specs[] = [
    { value: '2_8', viewValue: '2 CPU, 8 GB Memory' },
    { value: '4_16', viewValue: '4 CPU, 16 GB Memory' },
    { value: '8_32', viewValue: '8 CPU, 32 GB Memory' },
    { value: '16_48', viewValue: '16 CPU, 48 GB Memory' },
    { value: '32_128', viewValue: '32 CPU, 128 GB Memory' },
    { value: '64_256', viewValue: '64 CPU, 256 GB Memory' }
  ];

  // Worker
  // Quantity
  workerspecsQuantity: Specs[] = [
    { value: '3', viewValue: '3' },
    { value: '5', viewValue: '5' },
    { value: '7', viewValue: '7' }
  ];

  // CPU and Memory
  workerspecsMemoryCPU: Specs[] = [
    { value: '2_8', viewValue: '2 CPU, 8 GB Memory' },
    { value: '4_16', viewValue: '4 CPU, 16 GB Memory' },
    { value: '8_32', viewValue: '8 CPU, 32 GB Memory' },
    { value: '16_48', viewValue: '16 CPU, 48 GB Memory' },
    { value: '32_128', viewValue: '32 CPU, 128 GB Memory' },
    { value: '64_256', viewValue: '64 CPU, 256 GB Memory' }
  ];

  // Storage Node
  // Only Ubuntu, CentOS, RHEL
  // Fixed CPU and memory,2_8
  //  disk size
  storagespecsDiskSize: Specs[] = [
    { value: '50', viewValue: '50 GB Storage Disk Size' },
    { value: '100', viewValue: '100 GB Storage Disk Size' },
    { value: '200', viewValue: '200 GB Storage Disk Size' },
    { value: '300', viewValue: '300 GB Storage Disk Size' },
    { value: '500', viewValue: '500 GB Storage Disk Size' }
  ];
  //  disk type
  storagespecsDiskType: Specs[] = [
    { value: 'SSD', viewValue: 'Solid State Drive (SSD)' },
    { value: 'HDD', viewValue: 'Traditional Hard Disk Drive (HDD)' }
  ];

  // Pass though variable with onInit
  ngOnInit() {
    // Use ES6 function include to check or use  Good old’ .indexOf():
    // ES6 .includes():  OR Good old’ .indexOf():
    if (this.title.includes('Master')) {
      console.log('master equal to true');
      this.mastercon = true;
    }

    if (this.title.includes('Proxy')) {
      console.log('proxy equal to true');
      this.proxycon = true;
    }

    if (this.title.includes('Management')) {
      console.log('mgmt equal to true');
      this.mgmtcon = true;
    }

    if (this.title.includes('Worker')) {
      console.log('worker equal to true');
      this.workercon = true;
    }

    if (this.title.includes('Storage')) {
      console.log('storage equal to true');
      this.storagecon = true;
    }
  }
}
