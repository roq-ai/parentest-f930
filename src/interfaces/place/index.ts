import { CommentInterface } from 'interfaces/comment';
import { ParentInterface } from 'interfaces/parent';
import { GetQueryInterface } from 'interfaces';

export interface PlaceInterface {
  id?: string;
  name: string;
  description?: string;
  rating?: number;
  parent_id?: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  parent?: ParentInterface;
  _count?: {
    comment?: number;
  };
}

export interface PlaceGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  parent_id?: string;
}
