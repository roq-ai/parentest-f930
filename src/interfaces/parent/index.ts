import { ChildInterface } from 'interfaces/child';
import { CommentInterface } from 'interfaces/comment';
import { PlaceInterface } from 'interfaces/place';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ParentInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  child?: ChildInterface[];
  comment?: CommentInterface[];
  place?: PlaceInterface[];
  user?: UserInterface;
  _count?: {
    child?: number;
    comment?: number;
    place?: number;
  };
}

export interface ParentGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
