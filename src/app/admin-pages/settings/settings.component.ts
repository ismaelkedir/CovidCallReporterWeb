import {Component, OnInit} from '@angular/core';
import {Zone} from './zones/zones.objects';
import {Region} from './regions/regions.objects';
import {City} from './cities/cities.object';
import {Wereda} from './weredas/weredas.objects';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    public selectedRegion = new Region();
    public selectedZone = new Zone();
    public selectedWereda = new Wereda();
    public selectedCity = new City();

    constructor() {
    }

    ngOnInit() {
    }

    public onSelectRegion(event: Region) {
        console.log('SELECTED REGION: ', event);
        this.selectedRegion = event;
    }

    public onSelectZone(event: Zone) {
        console.log('SELECTED ZONE: ', event);
        this.selectedZone = event;
    }

    public onSelectWereda(event: Wereda) {
        console.log('SELECTED WEREDA: ', event);
        this.selectedWereda = event;
    }
}
