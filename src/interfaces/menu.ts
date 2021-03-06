export interface IMenuItem {
  title: string;
  icon?: IMenuItemIcon;
  color?: string;
  active?: boolean;
  disabled?: boolean;
  hovered: boolean;
  groupTitle?: boolean;
  routing?: string;
  layout?: string;
  externalLink?: string;
  sub?: IMenuItemSub[];
  badge?: IMenuItemBadge;
  onClick?: (title: string, state: boolean) => void;
}

export interface IMenuItemIcon {
  class?: string;
  color?: string;
  bg?: string;
}

export interface IMenuItemSub {
  title: string;
  icon?: string;
  color?: string;
  layout?: string;
  hovered: boolean;
  active?: boolean;
  disabled?: boolean;
  routing?: string;
  externalLink?: string;
  sub?: IMenuItemSub[];
}

export interface IMenuItemBadge {
  text?: string;
  color?: string;
  bg?: string;
}
