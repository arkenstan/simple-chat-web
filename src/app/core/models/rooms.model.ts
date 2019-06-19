export interface RoomMember {
	userId: string;
	addeOn: Date;
}
export interface Room {
	_id: string;
	name: string;
	members: RoomMember[];
	createdBy: string;
}
