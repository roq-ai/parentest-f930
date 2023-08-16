import { ParentInterface } from 'interfaces/parent';
import { PlaceInterface } from 'interfaces/place';
import { GetQueryInterface } from 'interfaces';

export interface CommentInterface {
  id?: string;
  content: string;
  parent_id?: string;
  place_id?: string;
  created_at?: any;
  updated_at?: any;

  parent?: ParentInterface;
  place?: PlaceInterface;
  _count?: {};
}

export interface CommentGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  parent_id?: string;
  place_id?: string;
}
