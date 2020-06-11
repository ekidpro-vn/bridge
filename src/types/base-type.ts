export interface ResponseType<Channel, DataType> {
  id: string;
  channel: Channel;
  data: DataType;
}

export interface RequestType<Channel> {
  id: string;
  channel: Channel;
}
