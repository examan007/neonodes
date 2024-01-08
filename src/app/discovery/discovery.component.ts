import { Component, OnInit, Inject } from '@angular/core';
import { DiscoveryService } from './discovery.service';
import { WINDOW } from '@ng-web-apis/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discovery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css'],
})
export class DiscoveryComponent implements OnInit {
  nodes: any[] = [];
  clusterStatus: string = '';
  nodeName: any;
  nodeIp: any;


  constructor(private discoveryService: DiscoveryService, @Inject(WINDOW) private window: Window){
	  window.setTimeout(() => {
		  this.getData()
	  }, 100)
  }

  getData() {
		  this.loadNodes()
   		  this.loadClusterStatus()
  }

  ngOnInit(): void {
  }

  loadNodes(): void {
    this.discoveryService.getNodes().subscribe(
      (nodes) => {
        this.nodes = nodes;
	console.log(JSON.stringify(nodes))
      },
      (error) => {
        console.error('Error loading nodes:', error);
      }
    );
  }

  loadClusterStatus(): void {
    this.discoveryService.getClusterStatus().subscribe(
      (status) => {
        this.clusterStatus = status;
      },
      (error) => {
        console.error('Error loading cluster status:', error);
      }
    );
  }

  registerNode(nodeName: string, ip: string): void {
    this.discoveryService.registerNode(nodeName, ip).subscribe(
      () => {
        this.loadNodes();
        this.loadClusterStatus();
      },
      (error) => {
        console.error('Error registering node:', error);
      }
    );
  }

  deregisterNode(nodeName: string, ip: string): void {
    this.discoveryService.deregisterNode(nodeName, ip).subscribe(
      () => {
        this.loadNodes();
        this.loadClusterStatus();
      },
      (error) => {
        console.error('Error deregistering node:', error);
      }
    );
  }
}

