import { MetaMaskProvider } from './core/services/metaMask.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gas-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public gotWeb3: boolean = !!(window as any).ethereum;
    constructor(private metaMask: MetaMaskProvider) {}
    ngOnInit() {
        this.metaMask.enable();
    }
}
