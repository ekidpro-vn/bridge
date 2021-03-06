export interface ResponseType<Channel, DataType> {
  id: string;
  channel: Channel;
  data: DataType;
}

export interface RequestType<Channel, Extra = void> {
  id: string;
  channel: Channel;
  data?: Extra;
}
