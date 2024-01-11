import { Component, OnInit, Inject } from '@angular/core';
import { DiscoveryService } from './discovery.service';
import { WINDOW } from '@ng-web-apis/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-discovery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './discovery.component.html',
  styleUrls: ['./discovery.component.css'],
})
export class DiscoveryComponent implements OnInit {
  nodes: any[] = [];
  clusterStatus: string = '';
  nodeName: string = '';
  nodeIp: string = '';

  constructor(private discoveryService: DiscoveryService, @Inject(WINDOW) private window: Window){
      console.log("Constructor.")
	  window.setTimeout(() => {
	      console.log("Delayed load.")
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

  registerNode(): void {
    this.discoveryService.registerNode(this.nodeName, this.nodeIp).subscribe(
      () => {
        this.loadNodes();
        this.loadClusterStatus();
      },
      (error) => {
        console.error('Error registering node:', error);
      }
    );
  }

  deregisterNode(): void {
    this.discoveryService.deregisterNode(this.nodeName, this.nodeIp).subscribe(
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

