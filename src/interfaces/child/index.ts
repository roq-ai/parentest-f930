import { ParentInterface } from 'interfaces/parent';
import { GetQueryInterface } from 'interfaces';

export interface ChildInterface {
  id?: string;
  name: string;
  parent_id?: string;
  created_at?: any;
  updated_at?: any;

  parent?: ParentInterface;
  _count?: {};
}

export interface ChildGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  parent_id?: string;
}
