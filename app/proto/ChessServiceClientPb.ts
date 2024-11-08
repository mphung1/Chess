/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.3
// source: app/proto/chess.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as app_proto_chess_pb from '../../app/proto/chess_pb'; // proto import: "app/proto/chess.proto"


export class ChessClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorCreateRoom = new grpcWeb.MethodDescriptor(
    '/Chess/CreateRoom',
    grpcWeb.MethodType.UNARY,
    app_proto_chess_pb.CreateRoomRequest,
    app_proto_chess_pb.RoomResponse,
    (request: app_proto_chess_pb.CreateRoomRequest) => {
      return request.serializeBinary();
    },
    app_proto_chess_pb.RoomResponse.deserializeBinary
  );

  createRoom(
    request: app_proto_chess_pb.CreateRoomRequest,
    metadata?: grpcWeb.Metadata | null): Promise<app_proto_chess_pb.RoomResponse>;

  createRoom(
    request: app_proto_chess_pb.CreateRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: app_proto_chess_pb.RoomResponse) => void): grpcWeb.ClientReadableStream<app_proto_chess_pb.RoomResponse>;

  createRoom(
    request: app_proto_chess_pb.CreateRoomRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: app_proto_chess_pb.RoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Chess/CreateRoom',
        request,
        metadata || {},
        this.methodDescriptorCreateRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Chess/CreateRoom',
    request,
    metadata || {},
    this.methodDescriptorCreateRoom);
  }

  methodDescriptorJoinRoom = new grpcWeb.MethodDescriptor(
    '/Chess/JoinRoom',
    grpcWeb.MethodType.UNARY,
    app_proto_chess_pb.JoinRoomRequest,
    app_proto_chess_pb.RoomResponse,
    (request: app_proto_chess_pb.JoinRoomRequest) => {
      return request.serializeBinary();
    },
    app_proto_chess_pb.RoomResponse.deserializeBinary
  );

  joinRoom(
    request: app_proto_chess_pb.JoinRoomRequest,
    metadata?: grpcWeb.Metadata | null): Promise<app_proto_chess_pb.RoomResponse>;

  joinRoom(
    request: app_proto_chess_pb.JoinRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: app_proto_chess_pb.RoomResponse) => void): grpcWeb.ClientReadableStream<app_proto_chess_pb.RoomResponse>;

  joinRoom(
    request: app_proto_chess_pb.JoinRoomRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: app_proto_chess_pb.RoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Chess/JoinRoom',
        request,
        metadata || {},
        this.methodDescriptorJoinRoom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Chess/JoinRoom',
    request,
    metadata || {},
    this.methodDescriptorJoinRoom);
  }

  methodDescriptorGetRooms = new grpcWeb.MethodDescriptor(
    '/Chess/GetRooms',
    grpcWeb.MethodType.UNARY,
    app_proto_chess_pb.GetRoomRequest,
    app_proto_chess_pb.GetRoomsResponse,
    (request: app_proto_chess_pb.GetRoomRequest) => {
      return request.serializeBinary();
    },
    app_proto_chess_pb.GetRoomsResponse.deserializeBinary
  );

  getRooms(
    request: app_proto_chess_pb.GetRoomRequest,
    metadata?: grpcWeb.Metadata | null): Promise<app_proto_chess_pb.GetRoomsResponse>;

  getRooms(
    request: app_proto_chess_pb.GetRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: app_proto_chess_pb.GetRoomsResponse) => void): grpcWeb.ClientReadableStream<app_proto_chess_pb.GetRoomsResponse>;

  getRooms(
    request: app_proto_chess_pb.GetRoomRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: app_proto_chess_pb.GetRoomsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Chess/GetRooms',
        request,
        metadata || {},
        this.methodDescriptorGetRooms,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Chess/GetRooms',
    request,
    metadata || {},
    this.methodDescriptorGetRooms);
  }

  methodDescriptorMoves = new grpcWeb.MethodDescriptor(
    '/Chess/Moves',
    grpcWeb.MethodType.UNARY,
    app_proto_chess_pb.MoveRequest,
    app_proto_chess_pb.MoveResponse,
    (request: app_proto_chess_pb.MoveRequest) => {
      return request.serializeBinary();
    },
    app_proto_chess_pb.MoveResponse.deserializeBinary
  );

  moves(
    request: app_proto_chess_pb.MoveRequest,
    metadata?: grpcWeb.Metadata | null): Promise<app_proto_chess_pb.MoveResponse>;

  moves(
    request: app_proto_chess_pb.MoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: app_proto_chess_pb.MoveResponse) => void): grpcWeb.ClientReadableStream<app_proto_chess_pb.MoveResponse>;

  moves(
    request: app_proto_chess_pb.MoveRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: app_proto_chess_pb.MoveResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Chess/Moves',
        request,
        metadata || {},
        this.methodDescriptorMoves,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Chess/Moves',
    request,
    metadata || {},
    this.methodDescriptorMoves);
  }

  methodDescriptorGetRoomInfo = new grpcWeb.MethodDescriptor(
    '/Chess/GetRoomInfo',
    grpcWeb.MethodType.UNARY,
    app_proto_chess_pb.GetRoomRequest,
    app_proto_chess_pb.RoomResponse,
    (request: app_proto_chess_pb.GetRoomRequest) => {
      return request.serializeBinary();
    },
    app_proto_chess_pb.RoomResponse.deserializeBinary
  );

  getRoomInfo(
    request: app_proto_chess_pb.GetRoomRequest,
    metadata?: grpcWeb.Metadata | null): Promise<app_proto_chess_pb.RoomResponse>;

  getRoomInfo(
    request: app_proto_chess_pb.GetRoomRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: app_proto_chess_pb.RoomResponse) => void): grpcWeb.ClientReadableStream<app_proto_chess_pb.RoomResponse>;

  getRoomInfo(
    request: app_proto_chess_pb.GetRoomRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: app_proto_chess_pb.RoomResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Chess/GetRoomInfo',
        request,
        metadata || {},
        this.methodDescriptorGetRoomInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Chess/GetRoomInfo',
    request,
    metadata || {},
    this.methodDescriptorGetRoomInfo);
  }

  methodDescriptorListenToRoom = new grpcWeb.MethodDescriptor(
    '/Chess/ListenToRoom',
    grpcWeb.MethodType.SERVER_STREAMING,
    app_proto_chess_pb.MoveRequest,
    app_proto_chess_pb.RoomResponseStream,
    (request: app_proto_chess_pb.MoveRequest) => {
      return request.serializeBinary();
    },
    app_proto_chess_pb.RoomResponseStream.deserializeBinary
  );

  listenToRoom(
    request: app_proto_chess_pb.MoveRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<app_proto_chess_pb.RoomResponseStream> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/Chess/ListenToRoom',
      request,
      metadata || {},
      this.methodDescriptorListenToRoom);
  }

}

