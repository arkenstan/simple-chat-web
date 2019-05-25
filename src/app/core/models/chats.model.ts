export interface Member {
	userId: string;
	addedOn: Date;
}
export interface Room {
	_id: string;
	name: string;
	members: Member[];
	createdBy: string;
}
export interface NewRoomData {
	name: string;
}
