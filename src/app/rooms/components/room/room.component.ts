import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Room } from '@core/models';

@Component({
	selector: 'app-room',
	templateUrl: './room.component.html',
	styleUrls: [ './room.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class RoomComponent implements OnInit {
	@Input() room: Room;

	constructor() {}

	ngOnInit() {}
}
